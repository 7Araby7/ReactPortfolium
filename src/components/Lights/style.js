import styled, { keyframes } from 'styled-components';

// Animação das luzes
const moveLights = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-2vh);
  }
  70% {
    transform: translateY(2vh);
  }
`;

// Estilo para cada luz
export const Light = styled.div`
  position: absolute;
  padding: 0.3vh;
  border-radius: 50%;
  background: radial-gradient(circle, var(--opposite) 0%, var(--accent) 100%);
  filter: drop-shadow(0 0 0.5vh var(--accent));
  animation: ${moveLights} 5s ease-in-out infinite;

  &:nth-child(odd) {
    animation-duration: 7s;
  }

  &:nth-child(even) {
    animation-duration: 6s;
  }
`;

export const LightsContainer = styled.div`
  z-index: ${(props) => props.$zIndex || 0};
  position: absolute;
  width: 98%;
  height: 100%;
`;
