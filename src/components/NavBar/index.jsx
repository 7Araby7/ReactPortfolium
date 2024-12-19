import './style.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <a href="#home" className="navbar-link">
            <b>Home</b>
          </a>
        </li>
        <li>
          <a href="#aboutMe" className="navbar-link">
            <b>About Me</b>
          </a>
        </li>
        <li>
          <a href="#skills" className="navbar-link">
            <b>Skills</b>
          </a>
        </li>
        <li>
          <a href="#projects" className="navbar-link">
            <b>Projects</b>
          </a>
        </li>
        <li>
          <a href="#contact" className="navbar-link">
            <b>Contact</b>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
