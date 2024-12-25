import { useCallback, useEffect, useRef, useState } from 'react';
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

  const userThemePreferenceRef = useRef(null);

  const theme = dark ? darkTheme : lightTheme;
  const color = colorTheme(colors);

  useEffect(() => {
    userThemePreferenceRef.current = userThemePreference;
  }, [userThemePreference]);

  const initializePreferences = () => {
    const savedColorPreference = localStorage.getItem('colorPreference');
    if (savedColorPreference) {
      setColors(savedColorPreference);
    } else {
      setColors('purple');
    }

    const savedThemePreference = localStorage.getItem('themePreference');
    if (savedThemePreference) {
      setUserThemePreference(savedThemePreference === 'dark');
      setDark(savedThemePreference === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDark(prefersDark);
    }
  };

  const addThemeListener = useCallback(() => {
    const themeListener = (e) => {
      if (userThemePreferenceRef.current === null) {
        setDark(e.matches);
      }
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', themeListener);

    return () => {
      mediaQuery.removeEventListener('change', themeListener);
    };
  }, []);

  useEffect(() => {
    initializePreferences();
    const removeListener = addThemeListener();

    return removeListener;
  }, [addThemeListener]);

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
