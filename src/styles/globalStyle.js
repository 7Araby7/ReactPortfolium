import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: light dark;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;

    --primary: ${(props) => props.theme.primary};
    --secondary: ${(props) => props.theme.secondary};
    --text: ${(props) => props.theme.text};
    --opposite: ${(props) => props.theme.opposite};
    --nav: ${(props) => props.theme.nav};
    --accent: ${(props) => props.theme.color.accent};
    --light-accent: ${(props) => props.theme.color.lightAccent};
    --lightter-accent: ${(props) => props.theme.color.lightterAccent};
    --neon-glow: ${(props) => props.theme.color.neonGlow};
  }

  body {
    min-height: 100vh;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    background-color: var(--primary);
    color: var(--text);
    font-weight: 400;
    font-family: 'Orbitron', Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  }

  .section {
    min-height: 50vh;
    padding: 5rem 2rem;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
