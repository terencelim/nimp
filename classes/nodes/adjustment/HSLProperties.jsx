import Properties from '../Properties.js';
import PropertiesInputSlider from '../../../components/PropertiesInputSlider.jsx';


export default class HSLProperties extends Properties {

  render() {
    return (
      <div>
        <div className="propertiesTitle">Hue Saturation Lightness</div>
        <div style={{padding:'10px'}}>
          <PropertiesInputSlider node={this.props.node} name="Hue" varName={'hue'} input={this.props.node.inputs[1]} min={-360} max={360} step={1} />
          <PropertiesInputSlider node={this.props.node} name="Saturation" varName={'saturation'} input={this.props.node.inputs[2]} min={-1} max={1} step={0.01} />
          <PropertiesInputSlider node={this.props.node} name="Lightness" varName={'lightness'} input={this.props.node.inputs[3]} min={-1} max={1} step={0.01} />

          {this.renderRun()}
        </div>
      </div>
    )
  }
}
