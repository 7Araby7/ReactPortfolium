import { useEffect, useState } from 'react';
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
import Map from './components/Map';
import FeaturedProjects from './components/FeaturedProjects';

function App() {
  // Config options variants
  const [colorPicked, setColorPicked] = useState();
  const [dark, setDark] = useState(true);
  const [language, setLanguage] = useState();

  // Passing options for the globalStyle
  const theme = dark ? darkTheme : lightTheme;
  const color = colorTheme(colorPicked, dark);

  // Initializing the options
  const initializePreferences = () => {
    const savedColorPreference = localStorage.getItem('colorPreference');
    if (savedColorPreference) {
      setColorPicked(savedColorPreference);
    } else {
      setColorPicked('blue');
    }

    const savedLanguagePreference = localStorage.getItem('languagePreference');
    if (savedLanguagePreference) {
      setLanguage(savedLanguagePreference);
    } else {
      setLanguage('br');
    }

    const savedThemePreference = localStorage.getItem('themePreference');
    if (savedThemePreference) {
      setDark(savedThemePreference === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDark(prefersDark);
    }
  };

  useEffect(() => {
    initializePreferences();

    /* setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200); */
  }, []);

  const handleColorPicked = (colorPicked) => {
    setColorPicked(colorPicked);
    localStorage.setItem('colorPreference', colorPicked);
  };

  const handleThemeToggle = () => {
    const newTheme = !dark;
    setDark(newTheme);
    localStorage.setItem('themePreference', newTheme ? 'dark' : 'light');
  };

  const handleLanguageToggle = () => {
    const toggleLanguage = language === 'us' ? 'br' : 'us';
    setLanguage(toggleLanguage);
    localStorage.setItem('languagePreference', toggleLanguage);
  };

  return (
    <ThemeProvider theme={{ ...theme, color }}>
      <GlobalStyle />
      <ThemeSwitcher handleThemeToggle={handleThemeToggle} dark={dark} />
      <NavBar language={language} />
      <Header handleColor={handleColorPicked} handleLanguage={handleLanguageToggle} language={language} />
      <AboutMe dark={dark} language={language} />
      <FeaturedProjects language={language} />
      <Projects language={language} />
      <Map language={language} />
      <Contact language={language} color={colorPicked} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
