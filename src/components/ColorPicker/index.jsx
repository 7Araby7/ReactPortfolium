import { useEffect, useState } from 'react';
import './style.css';
import P from 'prop-types';

const ColorPicker = ({ handleColor }) => {
  const [colors, setColors] = useState(2);

  const handleClick = () => {
    setColors((c) => (c === 2 || c === 1 ? 0 : 1));
  };

  useEffect(() => {}, [colors]);

  return (
    <>
      <button className="rgb" onClick={handleClick}></button>
      <div className={`color-picker ${colors === 2 ? '' : colors === 1 ? 'on' : 'off'}`}>
        <button id="button-red" onClick={() => handleColor('red')}></button>
        <button id="button-orange" onClick={() => handleColor('orange')}></button>
        <button id="button-yellow" onClick={() => handleColor('yellow')}></button>
        <button id="button-green" onClick={() => handleColor('green')}></button>
        <button id="button-teal" onClick={() => handleColor('teal')}></button>
        <button id="button-blue" onClick={() => handleColor('blue')}></button>
        <button id="button-purple" onClick={() => handleColor('purple')}></button>
        <button id="button-pink" onClick={() => handleColor('pink')}></button>
        <button id="button-magenta" onClick={() => handleColor('magenta')}></button>
        <div className="line"></div>
      </div>
    </>
  );
};

ColorPicker.propTypes = {
  handleColor: P.func.isRequired,
};

export default ColorPicker;
