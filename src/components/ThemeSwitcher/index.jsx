import './style.css';
import P from 'prop-types';
import { useState } from 'react';

const ThemeSwitcher = ({ handleThemeToggle }) => {
  const [themeChanger, setThemeChanger] = useState(true);

  const handleClick = () => {
    const themeSwitcher = document.querySelector('.theme-switcher');
    themeSwitcher.style.animation = 'none';
    void themeSwitcher.offsetWidth;
    themeSwitcher.style.animation = '';

    setTimeout(() => {
      handleThemeToggle();
      setThemeChanger(!themeChanger);
    }, 700);
  };

  return (
    <div className={`theme-switcher ${themeChanger ? 'sun' : 'moon'}`}>
      <button onClick={handleClick}>
        <div className="hole"></div>
        <div className="hole"></div>
      </button>
      <div className="line"></div>
    </div>
  );
};

ThemeSwitcher.propTypes = {
  handleThemeToggle: P.func.isRequired,
};

export default ThemeSwitcher;
