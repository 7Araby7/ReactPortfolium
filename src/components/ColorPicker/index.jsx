import './style.css';
import P from 'prop-types';

const ColorPicker = ({ handleColor }) => (
  <div className="color-picker">
    <button id="button-red" onClick={() => handleColor('red')}></button>
    <button id="button-orange" onClick={() => handleColor('orange')}></button>
    <button id="button-yellow" onClick={() => handleColor('yellow')}></button>
    <button id="button-green" onClick={() => handleColor('green')}></button>
    <button id="button-teal" onClick={() => handleColor('teal')}></button>
    <button id="button-blue" onClick={() => handleColor('blue')}></button>
    <button id="button-purple" onClick={() => handleColor('purple')}></button>
    <button id="button-pink" onClick={() => handleColor('pink')}></button>
    <button id="button-magenta" onClick={() => handleColor('magenta')}></button>
    <div className="rgb"></div>
    <div className="line"></div>
  </div>
);

ColorPicker.propTypes = {
  handleColor: P.func.isRequired,
};

export default ColorPicker;
