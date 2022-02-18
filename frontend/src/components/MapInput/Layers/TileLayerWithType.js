import TileLayer from 'ol/layer/Tile';

class TileLayerWithType extends TileLayer {
  constructor(props) {
    super(props);
    this.TYPE = 'TileLayerWithType';
  }
}

export default TileLayerWithType;
