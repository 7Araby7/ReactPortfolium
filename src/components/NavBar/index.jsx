import './style.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <a href="#home" className="navbar-link">
            Home
          </a>
        </li>
        <li>
          <a href="#work" className="navbar-link">
            Work
          </a>
        </li>
        <li>
          <a href="#about" className="navbar-link">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="navbar-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
