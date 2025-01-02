import { useMotionValueEvent, useScroll } from 'framer-motion';
import P from 'prop-types';
import { useEffect, useState } from 'react';
import { BsMoonStars } from 'react-icons/bs';
import { TbSunHigh } from 'react-icons/tb';

import * as Styled from './style';

const ThemeSwitcher = ({ handleThemeToggle, dark }) => {
  const [isMoon, setisMoon] = useState(!dark);
  const [animate, setAnimate] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (current) => {
    const previous = scrollY.getPrevious();
    const direction = current > previous ? 'down' : 'up';

    setIsVisible(direction === 'up');
  });

  useEffect(() => {
    setisMoon(!dark);
  }, [dark]);

  const handleClick = () => {
    setTimeout(() => {
      setAnimate(true);
    }, 0);
    setTimeout(() => {
      setisMoon(!isMoon);
      handleThemeToggle();
    }, 700);
    setTimeout(() => {
      setAnimate(false);
    }, 950);
  };

  return (
    <Styled.ThemeSwitcher
      $animate={animate}
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : '-200px' }}
      transition={{ type: 'tween', duration: 0.3, delay: 0.3 }}
    >
      <Styled.Button onClick={handleClick}>
        {isMoon ? <BsMoonStars color="var(--primary)" /> : <TbSunHigh color="var(--primary)" />}
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
