import React, { Component } from 'react';
import 'components/ColorPicker/ColorPicker.css';

class ColorPicker extends Component {
  state = {
    activeOptionsIdx: 4,
  };

  setActiveIdx = index => {
    this.setState({
      activeOptionsIdx: index,
    });
  };

  makeOptionClassName = index => {
    const optionClasses = ['ColorPicker__option'];

    if (index === this.state.activeOptionsIdx) {
      optionClasses.push('ColorPicker__option--active');
    }
    return optionClasses.join(' ');
  };

  render() {
    const { activeOptionsIdx } = this.state;
    const { options } = this.props;

    const { label } = options[activeOptionsIdx];
    const { color } = options[activeOptionsIdx];
    console.log(label);

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Выбран цвет: {label}</p>
        <p>Код цвета: {color}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}
// const ColorPicker = ({ options }) => (
//   <div className="ColorPicker">
//     <h2 className="ColorPicker__title">Color Picker</h2>
//     <div>
//       {options.map(({ label, color }) => (
//         <span key={label} className="ColorPicker__option" style={{ backgroundColor: color }}></span>
//       ))}
//     </div>
//   </div>
// );
export default ColorPicker;
