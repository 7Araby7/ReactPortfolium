import styled, { css, keyframes } from 'styled-components';

// Animação para o conteúdo do header
const appearContent = keyframes`
  from {
    opacity: 0;
    transform: translateY(10vh);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const flagPops = keyframes`
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(0);
  }
  70% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
`;

// Styled Components
export const Header = styled.header`
  position: relative;
  overflow: hidden;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 110vh;
  background: radial-gradient(ellipse 60% 46% at top, var(--lightter-accent) 0%, var(--primary) 90%);
  text-align: center;
  color: var(--text);

  @media (max-width: 768px) {
    background: radial-gradient(ellipse 100% 35% at top, var(--light-accent) 0%, var(--primary) 90%);
  }
`;

export const Block = styled.span`
  cursor: not-allowed;
  position: absolute;
  background-color: transparent;
  right: 30px;
  top: 80px;
  width: 40px;
  height: 40px;

  @media (max-width: 768px) {
    top: 75px;
    left: 30px;
    right: auto;
    height: 30px;
    background-color: transparent;
    backdrop-filter: blur(0.1rem);
    animation: ${flagPops} 1000ms forwards;
  }
`;

export const Language = styled.span`
  position: absolute;
  cursor: pointer;
  right: 30px;
  top: 80px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ $animate }) =>
    $animate &&
    css`
      pointer-events: none;
      animation: ${flagPops} 1000ms forwards;
    `}

  @media (max-width: 768px) {
    top: 70px;
    left: 30px;
    right: auto;
  }
`;

export const HeaderContent = styled.div`
  animation: ${appearContent} 4000ms forwards;
`;
