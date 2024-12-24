import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    font-family: 'Orbitron', Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    color-scheme: light dark;
    --primary: ${(props) => props.theme.primary};
    --secondary: ${(props) => props.theme.secondary};
    --text: ${(props) => props.theme.text}; 
    --opposite: ${(props) => props.theme.opposite};
    --nav: ${(props) => props.theme.nav};
    --accent: ${(props) => props.theme.color.accent};
    --neon-glow: ${(props) => props.theme.color.neonGlow};
  }

  body {
    margin: 0;
    background-color: var(--primary);
    color: var(--text);
    font-weight: 400;
    min-height: 100vh;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .container {
    min-height: 100vh;
    width: 100%;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
