import './style.css';
import P from 'prop-types';

import LinkedinIcon from '../../assets/LinkedinIcon.jsx';
import GithubIcon from '../../assets/GithubIcon.jsx';
import ColorPicker from '../ColorPicker/index.jsx';
import ThemeSwitcher from '../ThemeSwitcher/index.jsx';

const Header = ({ handleColor, handleThemeToggle }) => {
  const lights = Array.from({ length: 80 }, (_, index) => ({
    id: index,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  }));

  return (
    <header className="header" id="home">
      {lights.map((light) => (
        <div key={light.id} className="light" style={{ top: light.top, left: light.left }}></div>
      ))}

      <div className="header-content">
        <p>
          <b>Welcome! I'm</b>
        </p>
        <div className="name">
          <h1>
            <b>G</b>
          </h1>
          <h1>
            <b>a</b>
          </h1>
          <h1>
            <b>b</b>
          </h1>
          <h1>
            <b>r</b>
          </h1>
          <h1>
            <b>i</b>
          </h1>
          <h1>
            <b>e</b>
          </h1>
          <h1>
            <b>l</b>
          </h1>
          <h1>
            <b> </b>
          </h1>
          <h1>
            <b>B</b>
          </h1>
          <h1>
            <b>r</b>
          </h1>
          <h1>
            <b>u</b>
          </h1>
          <h1>
            <b>n</b>
          </h1>
          <h1>
            <b>h</b>
          </h1>
          <h1>
            <b>a</b>
          </h1>
          <h1>
            <b>r</b>
          </h1>
          <h1>
            <b>a</b>
          </h1>
        </div>
        <p>
          <b>And I bring designs to life on the web.</b>
        </p>
        <div className="social-icon">
          <a href="https://github.com/7Araby7" target="_blank">
            <GithubIcon color="var(--text)" />
          </a>
          <a href="https://www.linkedin.com/in/gabriel-brunhara-049b43248/" target="_blank">
            <LinkedinIcon color="var(--text)" />
          </a>
        </div>
      </div>
      <ColorPicker handleColor={handleColor} />
      <ThemeSwitcher handleThemeToggle={handleThemeToggle} />
    </header>
  );
};

Header.propTypes = {
  handleColor: P.func.isRequired,
  handleThemeToggle: P.func.isRequired,
  theme: P.string.isRequired,
};

export default Header;
