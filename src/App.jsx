import './App.css';
import { useEffect, useState } from 'react';

import NavBar from './components/NavBar';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [color, setColor] = useState('red');
  const [dark, setDark] = useState(true);
  const theme = dark ? 'dark' : 'light';

  const handleColor = (color) => {
    setColor(color);
  };

  const handleThemeToggle = () => {
    setDark(!dark);
  };

  useEffect(() => {
    /*     const cursor = document.querySelector('.cursor');

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      cursor.style.top = `${y}px`;
      cursor.style.left = `${x}px`;
      cursor.style.display = 'block';
    };

    const handleMouseOut = () => {
      cursor.style.display = 'none';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseout', handleMouseOut);
    }; */
  }, []);

  return (
    <div className={`container ${theme}-theme`} id={`color-${color}`}>
      {/* <div className="cursor"></div> */}
      <NavBar />
      <Header handleColor={handleColor} handleThemeToggle={handleThemeToggle} />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
