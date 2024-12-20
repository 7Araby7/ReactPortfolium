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
        <h1>
          <b>Gabriel Brunhara</b>
        </h1>
        <p>
          <b>Creative Developer & Digital Innovator</b>
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
