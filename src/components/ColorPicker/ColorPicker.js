import React, { Component } from 'react';
import classNames from 'classnames';
import './ColorPicker.css';

class ColorPicker extends Component {
  state = {
    activeOptionsIdx: 4,
  };

  setActiveIdx = index => {
    this.setState({
      activeOptionsIdx: index,
    });
  };
  // ++++++++++++++++++++++++++++++= БЫЛО В НАЧАЛЕ ++++++++++++++++++++++++++++++
  // makeOptionClassName = index => {
  //   const optionClasses = ['ColorPicker__option'];

  //   if (index === this.state.activeOptionsIdx) {
  //     optionClasses.push('ColorPicker__option--active');
  //   }
  //   return optionClasses.join(' ');
  // };

  // ++++++++++++++++++++++++++++++= делаем через className пакет (npm i classnames)++++++++++++++++++++++++++++++

  // makeOptionClassName = index => {
  //   return classNames('ColorPicker__option', {
  //     'ColorPicker__option--active': index === this.state.activeOptionsIdx,
  //   });
  // };

  // +++++++++++++++++++++++++++++++++++++++++++++  Перенесли в розметку сделали инлайн +++++++++++++++++++++++++++=++++++++++++++++++++++++++++++
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
    // console.log(label);

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Выбран цвет: {label}</p>
        <p>Код цвета: {color}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              // className={this.makeOptionClassName(index)} заменили на classNames(npm i classnames)
              className={classNames('ColorPicker__option', {
                'ColorPicker__option--active':
                  index === this.state.activeOptionsIdx,
              })}
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
