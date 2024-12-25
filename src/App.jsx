import { useCallback, useEffect, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme, colorTheme } from './styles/theme';
import GlobalStyle from './styles/globalStyle';
//
import NavBar from './components/NavBar';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [colors, setColors] = useState();
  const [dark, setDark] = useState(true);
  const [userHasThemePreference, setUserHasThemePreference] = useState(false);

  const userHasThemePreferenceRef = useRef(false);

  const theme = dark ? darkTheme : lightTheme;
  const color = colorTheme(colors);

  useEffect(() => {
    userHasThemePreferenceRef.current = userHasThemePreference;
  }, [userHasThemePreference]);

  const initializePreferences = () => {
    const savedColorPreference = localStorage.getItem('colorPreference');
    if (savedColorPreference) {
      setColors(savedColorPreference);
    } else {
      setColors('purple');
    }

    const savedThemePreference = localStorage.getItem('themePreference');
    if (savedThemePreference) {
      setUserHasThemePreference(true);
      setDark(savedThemePreference === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDark(prefersDark);
    }
  };

  const addThemeListener = useCallback(() => {
    const themeListener = (e) => {
      if (!userHasThemePreferenceRef.current) {
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
    setUserHasThemePreference(true);
    setDark(newTheme);
    localStorage.setItem('themePreference', newTheme ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={{ ...theme, color }}>
      <GlobalStyle />
      <NavBar />
      <Header handleColor={handleColors} handleThemeToggle={handleThemeToggle} dark={dark} />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
