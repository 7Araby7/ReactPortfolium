import P from 'prop-types';

import * as Styled from './style';
import Lights from './Lights/index.jsx';
import HeaderText from './HeaderText/index.jsx';
import SocialIcon from './SocialIcon/index.jsx';
import ColorPicker from './ColorPicker/index.jsx';
import ThemeSwitcher from './ThemeSwitcher/index.jsx';

const Header = ({ handleColor, handleThemeToggle, dark }) => {
  return (
    <Styled.Header id="home">
      <Lights />
      <Styled.HeaderContent>
        <HeaderText />
        <SocialIcon />
      </Styled.HeaderContent>
      <ColorPicker handleColor={handleColor} />
      <ThemeSwitcher handleThemeToggle={handleThemeToggle} dark={dark} />
    </Styled.Header>
  );
};

Header.propTypes = {
  handleColor: P.func.isRequired,
  handleThemeToggle: P.func.isRequired,
  dark: P.bool.isRequired,
};

export default Header;
