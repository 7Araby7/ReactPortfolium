import { useState, useRef, useEffect } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import P from 'prop-types';

import * as Styled from './style';

const Navbar = ({ language = 'us' }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const { scrollY } = useScroll();
  const navbarRef = useRef(null);

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

  const handleLinkClick = () => {
    setIsChecked(false);
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsChecked(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Styled.Navbar
      ref={navbarRef}
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : '-100%' }}
      transition={{ type: 'tween', duration: 0.5 }}
    >
      <label htmlFor="toggle">{isChecked ? <IoClose size={25} /> : <HiOutlineMenuAlt2 size={25} />}</label>
      <input type="checkbox" id="toggle" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
      <Styled.NavbarList $isChecked={isChecked}>
        <li>
          <Link onClick={handleLinkClick} to="home" smooth={true} offset={-100} duration={50}>
            <Styled.NavbarLink>Home</Styled.NavbarLink>
          </Link>
        </li>
        <li>
          <Link onClick={handleLinkClick} to="aboutMe" smooth={true} offset={-100} duration={50}>
            <Styled.NavbarLink>{language === 'us' ? 'About me' : 'Sobre mim'}</Styled.NavbarLink>
          </Link>
        </li>
        <li>
          <Link onClick={handleLinkClick} to="projects" smooth={true} offset={-100} duration={50}>
            <Styled.NavbarLink>{language === 'us' ? 'Projects' : 'Projetos'}</Styled.NavbarLink>
          </Link>
        </li>
        <li>
          <Link onClick={handleLinkClick} to="map" smooth={true} offset={-50} duration={50}>
            <Styled.NavbarLink>{language === 'us' ? 'Find me' : 'Me encontre'}</Styled.NavbarLink>
          </Link>
        </li>
        <li>
          <Link onClick={handleLinkClick} to="contact" smooth={true} offset={-100} duration={50}>
            <Styled.NavbarLink>{language === 'us' ? 'Contact' : 'Contato'}</Styled.NavbarLink>
          </Link>
        </li>
      </Styled.NavbarList>
    </Styled.Navbar>
  );
};

Navbar.propTypes = {
  language: P.string,
};

export default Navbar;
