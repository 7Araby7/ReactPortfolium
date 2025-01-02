import { useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-scroll';

import * as Styled from './style';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true); // Controla a visibilidade do navbar
  const [isChecked, setIsChecked] = useState(false); // Controla o estado do checkbox
  const { scrollY } = useScroll(); // Pega o valor atual de scrollY

  useMotionValueEvent(scrollY, 'change', (current) => {
    const previous = scrollY.getPrevious();
    const direction = current > previous ? 'down' : 'up';
    setIsVisible(direction === 'up');
    if (direction === 'down') {
      setTimeout(() => {
        setIsChecked(false);
      }, 500);
    }
  });

  // Função pra desmarcar o checkbox
  const handleLinkClick = () => {
    setIsChecked(false);
  };

  return (
    <Styled.Navbar
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : '-700%' }}
      transition={{ type: 'tween', duration: 0.3, delay: 0.3 }}
      isChecked={isChecked}
    >
      <label htmlFor="toggle">&#9776;</label>
      <input type="checkbox" id="toggle" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
      <Styled.NavbarList>
        <li>
          <Link onClick={handleLinkClick} to="home" smooth={true} offset={-100} duration={50}>
            <Styled.NavbarLink>Home</Styled.NavbarLink>
          </Link>
        </li>
        <li>
          <Link onClick={handleLinkClick} to="aboutMe" smooth={true} offset={-100} duration={50}>
            <Styled.NavbarLink>About Me</Styled.NavbarLink>
          </Link>
        </li>
        <li>
          <Link onClick={handleLinkClick} to="projects" smooth={true} offset={-100} duration={50}>
            <Styled.NavbarLink>Projects</Styled.NavbarLink>
          </Link>
        </li>
        <li>
          <Link onClick={handleLinkClick} to="skills" smooth={true} offset={-100} duration={50}>
            <Styled.NavbarLink>Skills</Styled.NavbarLink>
          </Link>
        </li>
        <li>
          <Link onClick={handleLinkClick} to="contact" smooth={true} offset={-100} duration={50}>
            <Styled.NavbarLink>Contact</Styled.NavbarLink>
          </Link>
        </li>
      </Styled.NavbarList>
    </Styled.Navbar>
  );
};

export default Navbar;
