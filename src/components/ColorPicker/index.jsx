import './style.css';
import P from 'prop-types';

const ColorPicker = ({ handleColor }) => {
  return (
    <div className="color-picker">
      <button className="btn" id="button-red" onClick={() => handleColor('red')}>
        <div className="hole"></div>
      </button>
      <button className="btn" id="button-orange" onClick={() => handleColor('orange')}>
        <div className="hole"></div>
      </button>
      <button className="btn" id="button-yellow" onClick={() => handleColor('yellow')}>
        <div className="hole"></div>
      </button>
      <button className="btn" id="button-green" onClick={() => handleColor('green')}>
        <div className="hole"></div>
      </button>
      <button className="btn" id="button-teal" onClick={() => handleColor('teal')}>
        <div className="hole"></div>
      </button>
      <button className="btn" id="button-blue" onClick={() => handleColor('blue')}>
        <div className="hole"></div>
      </button>
      <button className="btn" id="button-purple" onClick={() => handleColor('purple')}>
        <div className="hole"></div>
      </button>
      <button className="btn" id="button-pink" onClick={() => handleColor('pink')}>
        <div className="hole"></div>
      </button>
      <button className="btn" id="button-magenta" onClick={() => handleColor('magenta')}>
        <div className="hole"></div>
      </button>
      <button className="btn" id="button-theme" onClick={() => handleColor('themeChange')}>
        <div className="hole"></div>
      </button>
    </div>
  );
};

ColorPicker.propTypes = {
  handleColor: P.func.isRequired,
};

export default ColorPicker;
