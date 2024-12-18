import './App.css';
import { useState } from 'react';

import NavBar from './components/NavBar';
import Header from './components/Header';
import Work from './components/Work';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [color, setColor] = useState('green');

  const handleColor = (color) => {
    setColor(color);
  };

  return (
    <div className="container" id={`color-${color}`}>
      <NavBar />
      <Header handleColor={handleColor} />
      <Work />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
