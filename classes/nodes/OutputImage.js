import Output from './Output.js';


export default class OutputImage extends Output {
  constructor(node, index, name) {
    super(node, index, name, 'Image');
  }


  removeConnection(inputConnection, run) {
    inputConnection.image = null;
    super.removeConnection(inputConnection, run);
  }
}
