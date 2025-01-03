import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Navbar = styled(motion.nav)`
  font-family: var(--font);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 1.45rem;
  background: var(--nav);
  backdrop-filter: blur(1.16rem);
  z-index: 100;
  border-bottom: ${({ isChecked }) => (isChecked ? 'none' : '0.174rem solid var(--accent)')};

  label {
    display: none;
    cursor: pointer;
  }

  #toggle {
    display: none;
  }

  @media (max-width: 768px) {
    padding: 0.5rem;

    label {
      font-size: 20px;
      display: block;
    }
  }
`;

export const NavbarList = styled.ul`
  font-size: 1.044rem;
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 1.856rem;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    text-align: center;

    input[type='checkbox']:checked + & {
      display: flex;
      position: absolute;
      top: 100%;
      left: 0%;
      width: 100%;
      background: var(--nav);
      backdrop-filter: blur(1.16rem);
      padding: 1rem 0;
      border-bottom: 0.174rem solid var(--accent);
    }
  }
`;

export const NavbarLink = styled.div`
  cursor: pointer;
  color: var(--text);
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 0 0.58rem;
  transition: all 0.3s;

  &::before {
    content: '';
    position: absolute;
    bottom: -0.7rem;
    left: 0;
    width: 100%;
    height: 0.174rem;
    background: var(--accent);
    transform: scaleX(0);
    transition: transform 0.3s;
    box-shadow: var(--neon-glow);
  }

  &:hover {
    &::before {
      transform: scaleX(1);
    }
  }

  @media (max-width: 768px) {
    &::before {
      transform: scaleX(0.19);
    }
  }
`;
