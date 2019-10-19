import Properties from '../Properties.js';
import PropertiesInputNumber from '../../../components/PropertiesInputNumber.jsx';


export default class TriangleProperties extends Properties {

  constructor(props) {
    super(props);

    this.state = {
      hasColorInput: props.node.inputs[8].parent ? true : false,
    }
  }

  render() {
    return (
      <div>
        <div className="propertiesTitle">Triangle</div>
        <div style={{padding:'10px'}}>
          <PropertiesInputNumber node={this.props.node} name="Width" varName={'width'} input={this.props.node.inputs[0]} min={1} step={1} />
          <PropertiesInputNumber node={this.props.node} name="Height" varName={'height'} input={this.props.node.inputs[1]} min={1} step={1} />
          <PropertiesInputNumber node={this.props.node} name="X1" varName={'x1'} input={this.props.node.inputs[2]} step={0.1} />
          <PropertiesInputNumber node={this.props.node} name="Y1" varName={'y1'} input={this.props.node.inputs[3]} step={0.1} />
          <PropertiesInputNumber node={this.props.node} name="X2" varName={'x2'} input={this.props.node.inputs[4]} step={0.1} />
          <PropertiesInputNumber node={this.props.node} name="Y2" varName={'y2'} input={this.props.node.inputs[5]} step={0.1} />
          <PropertiesInputNumber node={this.props.node} name="X3" varName={'x3'} input={this.props.node.inputs[6]} step={0.1} />
          <PropertiesInputNumber node={this.props.node} name="Y3" varName={'y3'} input={this.props.node.inputs[7]} step={0.1} />
          {this.renderColor()}

          {this.renderRun()}
        </div>
      </div>
    )
  }
}
