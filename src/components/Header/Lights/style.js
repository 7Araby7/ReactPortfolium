import styled, { keyframes } from 'styled-components';

// Animação das luzes
const moveLights = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-20px);
  }
  70% {
    transform: translateY(20px);
  }
`;

// Estilo para cada luz
export const Light = styled.div`
  position: absolute;
  padding: 0.3vh;
  border-radius: 50%;
  background: radial-gradient(circle, var(--opposite) 0%, var(--accent) 100%);
  filter: drop-shadow(0 0 0.5vh var(--opposite));
  animation: ${moveLights} 5s ease-in-out infinite;

  &:nth-child(odd) {
    animation-duration: 7s;
  }

  &:nth-child(even) {
    animation-duration: 6s;
  }
`;

export const LightsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;
