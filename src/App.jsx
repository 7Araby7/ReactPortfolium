import './App.css';
import { useEffect, useState } from 'react';

import NavBar from './components/NavBar';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [color, setColor] = useState('blue');
  const [dark, setDark] = useState(true);
  const theme = dark ? 'dark' : 'light';

  const handleColor = (color) => {
    setColor(color);
  };

  const handleThemeToggle = () => {
    setDark(!dark);
  };

  useEffect(() => {}, [dark]);

  return (
    <div className={`container ${theme}-theme`} id={`color-${color}`}>
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
