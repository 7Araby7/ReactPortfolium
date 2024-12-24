import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme, colorTheme } from './theme';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GlobalStyle from './GlobalStyle';

function App() {
  const [colors, setColors] = useState();
  const [dark, setDark] = useState(true);
  const [userThemePreference, setUserThemePreference] = useState(null);

  const theme = dark ? darkTheme : lightTheme;
  const color = colorTheme(colors);

  const initializeColor = () => {
    const savedColorPreference = localStorage.getItem('colorPreference');
    if (savedColorPreference !== null) {
      setColors(savedColorPreference);
    } else {
      setColors('purple');
    }
  };

  const initializeTheme = () => {
    const savedThemePreference = localStorage.getItem('themePreference');
    if (savedThemePreference !== null) {
      const isDarkTheme = savedThemePreference === 'dark';
      setUserThemePreference(isDarkTheme);
      setDark(isDarkTheme);
    } else {
      const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDark(preferredTheme);
    }
  };
  useEffect(() => {
    initializeColor();
    initializeTheme();

    const themeListener = (e) => {
      if (userThemePreference === null) {
        setDark(e.matches);
      }
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', themeListener);

    return () => {
      mediaQuery.removeEventListener('change', themeListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleColors = (colors) => {
    setColors(colors);

    localStorage.setItem('colorPreference', colors);
  };

  const handleThemeToggle = () => {
    const newTheme = !dark;

    setUserThemePreference(newTheme);
    setDark(newTheme);

    localStorage.setItem('themePreference', newTheme ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={{ ...theme, color }}>
      <GlobalStyle />
      <div className="container">
        <NavBar />
        <Header handleColor={handleColors} handleThemeToggle={handleThemeToggle} dark={dark} />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
