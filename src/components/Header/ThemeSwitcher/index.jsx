import P from 'prop-types';
import { useEffect, useState } from 'react';

import * as Styled from './style';
import MoonIcon from '../../../assets/svg/MoonIcon';
import SunIcon from '../../../assets/svg/SunIcon';

const ThemeSwitcher = ({ handleThemeToggle, dark }) => {
  const [isMoon, setisMoon] = useState(!dark);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setisMoon(!dark);
  }, [dark]);

  const handleClick = () => {
    setAnimate(false);
    setTimeout(() => {
      setAnimate(true);
    }, 0);
    setTimeout(() => {
      setisMoon(!isMoon);
      handleThemeToggle();
    }, 700);
  };

  return (
    <Styled.ThemeSwitcher $animate={animate}>
      <Styled.Button onClick={handleClick}>
        <Styled.Icon $isMoon={isMoon}>
          <MoonIcon color="var(--primary)" />
        </Styled.Icon>
        <Styled.Icon $isMoon={!isMoon}>
          <SunIcon color="var(--primary)" />
        </Styled.Icon>
      </Styled.Button>
      <Styled.Line />
    </Styled.ThemeSwitcher>
  );
};

ThemeSwitcher.propTypes = {
  handleThemeToggle: P.func.isRequired,
  dark: P.bool.isRequired,
};

export default ThemeSwitcher;
