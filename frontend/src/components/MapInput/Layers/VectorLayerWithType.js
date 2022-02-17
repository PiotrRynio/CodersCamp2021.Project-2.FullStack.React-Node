import VectorLayer from 'ol/layer/Vector';

class VectorLayerWithType extends VectorLayer {
  constructor(props) {
    super(props);
    this.TYPE = 'VectorLayerWithType';
  }
}

export default VectorLayerWithType;
