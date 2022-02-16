import React, { useEffect, useRef } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import XYZ from 'ol/source/XYZ';
import { fromLonLat, transform } from 'ol/proj';
import { Point } from 'ol/geom';
import { Feature } from 'ol';
import { MapDiv } from './MapInput.styled';

const MapInput = ({ setCoordsCallback }) => {
  const mapElement = useRef();

  useEffect(() => {
    const initialMap = new Map({
      target: mapElement.current,
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}',
          }),
        }),
      ],
      view: new View({
        projection: 'EPSG:3857',
        center: fromLonLat([19.27, 52.08]),
        zoom: 6,
      }),
      controls: [],
    });

    initialMap.on('click', handleMapClick);
  }, []);

  const handleMapClick = ({ target, pixel }) => {
    const clickedCoords = target.getCoordinateFromPixel(pixel);
    const transformedCoords = transform(clickedCoords, 'EPSG:3857', 'EPSG:4326');

    setCoordsCallback(transformedCoords);

    const layers = target.getLayers();
    layers.forEach((layer, index) => {
      if (layer.__proto__.constructor.name === 'VectorLayer') {
        target.removeLayer(layer);
      }
    });

    const newLayer = new VectorLayer({
      source: new VectorSource({
        features: [
          new Feature({
            geometry: new Point(fromLonLat(transformedCoords)),
          }),
        ],
      }),
    });
    target.addLayer(newLayer);
  };

  return <MapDiv ref={mapElement} />;
};

export default MapInput;
