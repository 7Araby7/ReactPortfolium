import { useEffect, useState } from 'react';
import './style.css';
import P from 'prop-types';

const ColorPicker = ({ handleColor }) => {
  const [colors, setColors] = useState(2);
  const [rotate, setrotate] = useState(2);

  const handleClick = () => {
    setColors((c) => (c === 2 || c === 0 ? 1 : 0));
    setrotate((r) => (r === 2 || r === 0 ? 1 : 0));
  };

  useEffect(() => {}, [colors, rotate]);

  return (
    <div className={`color-picker ${colors === 2 ? '' : colors === 1 ? 'on' : 'off'}`}>
      <button className="btn" id="button-red" onClick={() => handleColor('red')}></button>
      <button className="btn" id="button-orange" onClick={() => handleColor('orange')}></button>
      <button className="btn" id="button-yellow" onClick={() => handleColor('yellow')}></button>
      <button className="btn" id="button-green" onClick={() => handleColor('green')}></button>
      <button className="btn" id="button-teal" onClick={() => handleColor('teal')}></button>
      <button className="btn" id="button-blue" onClick={() => handleColor('blue')}></button>
      <button className="btn" id="button-purple" onClick={() => handleColor('purple')}></button>
      <button className="btn" id="button-pink" onClick={() => handleColor('pink')}></button>
      <button className="btn" id="button-magenta" onClick={() => handleColor('magenta')}></button>
      <button className="btn" id="button-theme" onClick={() => handleColor('themeChange')}></button>
      <button className={`rgb ${rotate === 2 ? '' : rotate === 1 ? 'in' : 'out'}`} onClick={handleClick}></button>
      <div className="line"></div>
    </div>
  );
};

ColorPicker.propTypes = {
  handleColor: P.func.isRequired,
};

export default ColorPicker;
