import P from 'prop-types';
import { useState } from 'react';

import * as Styled from './style';

const ThemeSwitcher = ({ handleThemeToggle }) => {
  const [isMoon, setisMoon] = useState(false);
  const [animate, setAnimate] = useState(false);

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
    <Styled.ThemeSwitcher animate={animate} /* className={isMoon ? 'moon' : 'sun'} */>
      <Styled.Button onClick={handleClick}>
        {/* <Styled.Hole isMoon={isMoon} variant={1} />
        <Styled.Hole isMoon={isMoon} variant={2} /> */}
      </Styled.Button>
      <Styled.Line />
    </Styled.ThemeSwitcher>
  );
};

ThemeSwitcher.propTypes = {
  handleThemeToggle: P.func.isRequired,
};

export default ThemeSwitcher;
