import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  0%, 100%{
    opacity: 1;
  }
  50%{
    opacity: 0;
  }
`;

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

  .barra {
    border: 3px solid var(--text);
    height: 50px;
    transform: translate(-40px, 5px);
    animation: ${blink} 1s steps(1, start) infinite;
    animation-delay: 2.2s;
    opacity: 0;
  }

  @media (max-width: 820px) {
    .barra {
      display: none;
    }
    flex-direction: column;
    gap: 0;
  }
`;
