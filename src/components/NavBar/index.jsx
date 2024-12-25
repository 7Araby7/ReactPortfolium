import * as Styled from './style';

const Navbar = () => {
  return (
    <Styled.Navbar>
      <Styled.NavbarList>
        <li>
          <Styled.NavbarLink href="#home">
            <b>Home</b>
          </Styled.NavbarLink>
        </li>
        <li>
          <Styled.NavbarLink href="#aboutMe">
            <b>About Me</b>
          </Styled.NavbarLink>
        </li>
        <li>
          <Styled.NavbarLink href="#skills">
            <b>Skills</b>
          </Styled.NavbarLink>
        </li>
        <li>
          <Styled.NavbarLink href="#projects">
            <b>Projects</b>
          </Styled.NavbarLink>
        </li>
        <li>
          <Styled.NavbarLink href="#contact">
            <b>Contact</b>
          </Styled.NavbarLink>
        </li>
      </Styled.NavbarList>
    </Styled.Navbar>
  );
};

export default Navbar;
