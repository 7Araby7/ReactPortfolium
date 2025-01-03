import { motion } from 'framer-motion';
import styled, { keyframes, css } from 'styled-components';

// Animações

const apearTheme = keyframes`
  from {
    opacity: 0;
    transform: translateY(-25rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const changeTheme = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(2rem);
  }
  50% {
    transform: translateY(-15rem);
  }
`;

// Componentes Styled
export const ThemeSwitcher = styled(motion.div)`
  z-index: 80;
  position: fixed;
  top: 1rem;
  left: 4rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 10;

  ${({ $animate }) =>
    $animate &&
    css`
      animation: ${changeTheme} 1000ms forwards;
    `}

  @media (max-width: 768px) {
    left: auto;
    right: 4rem;
    top: 0.5rem;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  left: -1.45rem;
  top: 3.8rem;
  position: absolute;
  padding: 0;
  z-index: 2;
  border-radius: 50%;
  animation: ${apearTheme} 3000ms forwards;
  background-color: var(--opposite);
  filter: drop-shadow(0 0 1rem var(--opposite));
  overflow: hidden;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 1.75rem;
    width: 1.75rem;
  }
`;

export const Line = styled.div`
  border: solid 0.1rem var(--opposite);
  top: -2.9rem;
  height: 6.75rem;
  position: absolute;
  z-index: 1;
  animation: ${apearTheme} 3000ms forwards;
`;
