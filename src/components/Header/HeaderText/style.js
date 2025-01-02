import { motion } from 'framer-motion';
import styled from 'styled-components';

// Animações
/* const lighting = keyframes
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
; */

/* const sumir = keyframes
  0% {
    opacity: 1;
  }
  50%{
    transform: translateY(50px -50px) rotate(45deg);
    opacity: 0.5
  }
  100% {
    transform: translate(100px, -100px) rotate(90deg);
    opacity: 0;
  }
; */

// Componentes Styled
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Paragraph = styled(motion.p)`
  position: relative;
  font-family: 'Eco Coding WGL4 W01 Bold';
  margin: 0.174rem;
  color: var(--accent);
  pointer-events: none;
  user-select: none;

  &:nth-child(1) {
    text-align: left;
    left: -0.58rem;
  }

  &:nth-child(3) {
    text-align: right;
    left: 0.58rem;
    left: 0.3vh;
  }

  @media (max-width: 768px) {
    &:nth-child(1) {
      text-align: center;
    }

    &:nth-child(3) {
      text-align: center;
    }
  }
`;

export const NameContainer = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;
