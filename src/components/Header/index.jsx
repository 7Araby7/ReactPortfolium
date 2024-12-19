import './style.css';
import P from 'prop-types';

import LinkedinIcon from '../../assets/LinkedinIcon.jsx';
import GithubIcon from '../../assets/GithubIcon.jsx';
import ColorPicker from '../ColorPicker/index.jsx';
import ThemeSwitcher from '../ThemeSwitcher/index.jsx';

const Header = ({ handleColor, handleThemeToggle, theme }) => {
  return (
    <header className="header" id="home">
      <div className="header-content">
        <h1>
          <b>Gabriel Brunhara</b>
        </h1>
        <p>
          <b>Creative Developer & Digital Innovator</b>
        </p>
        <div className="social-icon">
          <a href="https://github.com/7Araby7" target="_blank">
            <GithubIcon color={theme === 'dark' ? 'white' : '#2b2b2b'} />
          </a>
          <a href="https://www.linkedin.com/in/gabriel-brunhara-049b43248/" target="_blank">
            <LinkedinIcon color={theme === 'dark' ? 'white' : '#2b2b2b'} />
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
