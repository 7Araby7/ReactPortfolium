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
    --nav: ${(props) => props.theme.nav};
    --accent: ${(props) => props.theme.color.accent};
    --light-accent: ${(props) => props.theme.color.lightAccent};
    --lightter-accent: ${(props) => props.theme.color.lightterAccent};
    --neon-glow: ${(props) => props.theme.color.neonGlow};
    --font: ${(props) => props.theme.font};
    --border: ${(props) => props.theme.border};
    --blur: ${(props) => props.theme.blur};
  }

  body {
    min-height: 100vh;
    width: 100%;
    margin: 0 auto;
    background-color: var(--primary);
    font-family: 'Encode Sans SC','Atomic Age', 'Oi', 'Autour One', 'Orbitron', Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  }

  h2 {
    user-select: none;
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
  overflow: hidden;
  min-height: 70vh;
  padding: 5rem 7rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  font-family: 'Eco Coding WGL4 W01 Bold';
  min-width: 0px;
  border: solid var(--border) var(--accent);
  background: transparent;
  color: var(--text);
  padding: ${(props) => props.$padding};
  font-size: ${(props) => props.$fontSize};
  margin-top: ${(props) => props.$marginTop};
  border-radius: 0.4rem;
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

export const Highlight = styled.span`
  color: var(--accent);
`;

export default GlobalStyle;
