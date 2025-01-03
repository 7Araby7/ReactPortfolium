import { useCallback, useEffect, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme, colorTheme } from './styles/theme';
import GlobalStyle from './styles/globalStyle';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import ThemeSwitcher from './components/ThemeSwitcher';
import MotionWrapper from './utils/MotionWrapper';
import Map from './components/Map';

function App() {
  const [colorPicked, setColorPicked] = useState();
  const [dark, setDark] = useState(true);
  const [userHasThemePreference, setUserHasThemePreference] = useState(false);

  const userHasThemePreferenceRef = useRef(false);

  const theme = dark ? darkTheme : lightTheme;
  const color = colorTheme(colorPicked, dark);

  // Variants for animations
  const fadeInVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    userHasThemePreferenceRef.current = userHasThemePreference;
  }, [userHasThemePreference]);

  const initializePreferences = () => {
    const savedColorPreference = localStorage.getItem('colorPreference');
    if (savedColorPreference) {
      setColorPicked(savedColorPreference);
    } else {
      setColorPicked('purple');
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

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);

    return removeListener;
  }, [addThemeListener]);

  const handleColorPicked = (colorPicked) => {
    setColorPicked(colorPicked);
    localStorage.setItem('colorPreference', colorPicked);
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
      <ThemeSwitcher handleThemeToggle={handleThemeToggle} dark={dark} />
      <NavBar />
      <Header handleColor={handleColorPicked} />

      {/* Animated Components */}
      <MotionWrapper threshold={0.4} variants={fadeInVariants}>
        <AboutMe dark={dark} />
      </MotionWrapper>
      <MotionWrapper threshold={0.4} variants={fadeInVariants}>
        <Map />
      </MotionWrapper>
      <MotionWrapper variants={fadeInVariants}>
        <Projects />
      </MotionWrapper>
      <MotionWrapper variants={fadeInVariants}>
        <Contact />
      </MotionWrapper>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
