import './style.css'; // CSS específico para o componente Header
import PropTypes from 'prop-types';

import LinkedinIcon from '../../assets/LinkedinIcon.jsx';
import GithubIcon from '../../assets/GithubIcon.jsx';

const Header = ({ handleColor }) => (
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
          <GithubIcon color="white" />
        </a>
        <a href="https://www.linkedin.com/in/gabriel-brunhara-049b43248/" target="_blank">
          <LinkedinIcon color="white" />
        </a>
      </div>
    </div>
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
    </div>
  </header>
);

Header.propTypes = {
  handleColor: PropTypes.func.isRequired, // handleColor deve ser uma função e é obrigatória
};

export default Header;
