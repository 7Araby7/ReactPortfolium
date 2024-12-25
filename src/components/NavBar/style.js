import styled from 'styled-components';

export const Navbar = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 2.5vh;
  background: var(--nav);
  backdrop-filter: blur(2vh);
  z-index: 100;
  border-bottom: 0.3vh solid var(--accent);
`;

export const NavbarList = styled.ul`
  font-size: 1.8vh;
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 3.2vh;
  margin: 0;
  padding: 0;
`;

export const NavbarLink = styled.a`
  color: var(--text);
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 0.5vh 1vh;
  transition: all 0.3s;

  &::before {
    content: '';
    position: absolute;
    bottom: -0.3vh;
    left: 0;
    width: 100%;
    height: 0.3vh;
    background: var(--accent);
    transform: scaleX(0);
    transition: transform 0.3s;
    box-shadow: var(--neon-glow);
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;
