import React, { useState, useEffect, useRef } from 'react';

// openlayers
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import XYZ from 'ol/source/XYZ';
import { fromLonLat, transform } from 'ol/proj';
import { toStringXY } from 'ol/coordinate';
import { MapDiv } from './MapInput.styled';
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import { instanceOf } from 'prop-types';
import { Layer } from 'ol/layer';

const MapInput = ({ setCoordsCallback }) => {
  const [map, setMap] = useState();
  const mapElement = useRef();
  const mapRef = useRef();
  mapRef.current = map;

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

    setMap(initialMap);
  }, []);

  const handleMapClick = ({ target, pixel }) => {
    const clickedCoord = mapRef.current.getCoordinateFromPixel(pixel);

    const transormedCoord = transform(clickedCoord, 'EPSG:3857', 'EPSG:4326');

    setCoordsCallback(transormedCoord);

    const layers = target.getLayers();

    layers.forEach((layer, index) => {
      if (layer.__proto__.constructor.name === 'VectorLayer') {
        target.removeLayer(layer);
      }
    });

    console.log(transormedCoord);

    const newLayer = new VectorLayer({
      source: new VectorSource({
        features: [
          new Feature({
            geometry: new Point(fromLonLat(transormedCoord)),
          }),
        ],
      }),
    });
    target.addLayer(newLayer);
  };

  return <MapDiv ref={mapElement}></MapDiv>;
};

export default MapInput;
