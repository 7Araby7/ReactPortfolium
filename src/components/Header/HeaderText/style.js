import styled, { keyframes, css } from 'styled-components';

// Animações
const lighting = keyframes`
  0% {
    color: var(--text);
    text-shadow: none;
  }
  75% {
    color: var(--text);
    text-shadow: none;
  }
  100% {
    color: var(--accent);
    text-shadow: var(--neon-glow);
  }
`;

// Componentes Styled
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Paragraph = styled.p`
  font-size: 2.5vh;
  position: relative;
  font-family: 'Exo 2';
  left: 10px;
  margin: 3px;
  color: var(--accent);
  pointer-events: none;
  user-select: none;

  &:nth-child(1) {
    text-align: left;
    left: -10px;
  }

  &:nth-child(3) {
    text-align: right;
  }
`;

export const NameContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;

export const Letter = styled.h1`
  margin: 0;
  font-size: 8vh;
  font-weight: bold;
  color: var(--text);
  pointer-events: none;
  user-select: none;
  animation: ${lighting} 1.4s alternate infinite;

  ${({ index }) => css`
    animation-delay: ${(index - 1) * 0.1}s;
  `}

  /* &:nth-child(8) {
    width: 0.5em;
    display: inline-block;
  } */
    
  ${({ index }) =>
    index === 7 &&
    css`
      width: 0.5em;
      display: inline-block;
    `}
`;
