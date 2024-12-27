import { motion } from 'framer-motion';
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

/* const lighting = keyframes
  0% {
    color: var(--text);
    text-shadow: none;
  }
  75% {
    color: var(--accent);
    text-shadow: var(--neon-glow);
  }
  100% {
    color: var(--text);
    text-shadow: none;
  }
;*/

// Componentes Styled
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Paragraph = styled(motion.p)`
  font-size: 1.8vh;
  position: relative;
  font-family: 'Eco Coding WGL4 W01 Bold';
  margin: 0.3vh;
  color: var(--accent);
  pointer-events: none;
  user-select: none;

  &:nth-child(1) {
    text-align: left;
    left: -1vh;
  }

  &:nth-child(3) {
    text-align: right;
    left: 1vh;
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
  /* animation: ${lighting} 3s alternate forwards; */

  ${({ $index }) => css`
    animation-delay: ${($index - 1) * 0.1 /* 0.2 */}s;
  `}

  /* &:nth-child(8) {
    width: 0.5em;
    display: inline-block;
  } */

  ${({ $index }) =>
    $index === 7 &&
    css`
      width: 0.5em;
      display: inline-block;
    `}
`;
