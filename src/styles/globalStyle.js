import styled, { createGlobalStyle } from 'styled-components';

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
    --font: ${(props) => props.theme.font};
  }

  body {
    min-height: 100vh;
    width: 100%;
    margin: 0 auto;
    background-color: var(--primary);
    font-family: 'Encode Sans SC','Atomic Age', 'Oi', 'Autour One', 'Orbitron', Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  }

  h2 {
    font-size: 3rem;
    color: var(--text);
    margin-bottom: 2rem;
    font-weight: 700;
    cursor: default;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
    &:hover {
    hr {
      &::before {
        width: 100%;
      }
    }
  }
  }

  hr {
    position: relative;
    width: 30%;
    height: 4px;
    border-radius: 70px;
    border: none;
    background: var(--secondary);
    transition: border-color 0.3s ease;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: linear-gradient(110deg, var(--primary) 25%, var(--accent) 100%);
      z-index: 1;
      transition: width 0.3s ease;
    }
  }

  p{
    font-size: 1rem;
    color: var(--text);
    font-family: var(--font);

    @media (max-width: 768px) {
    font-size: 0.8rem;
  }
  }
`;

export const Section = styled.section`
  padding: 5rem 7rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

export const Button = styled.button`
  font-family: 'Eco Coding WGL4 W01 Bold';
  min-width: 150px;
  border: solid 0.05rem var(--accent);
  background: transparent;
  color: var(--text);
  padding: 1rem 2rem;
  border-radius: 0.4rem;
  font-size: 1.2rem;
  margin-top: 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.25s ease;

  &:hover {
    color: var(--primary);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--accent);
    z-index: -1;
    border-radius: 0 0 50% 50%;
    height: 0%;
    transition: all 0.25s ease;
  }

  &:hover::before {
    height: 190%;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
  }
`;

export default GlobalStyle;
