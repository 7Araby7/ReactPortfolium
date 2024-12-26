import styled, { keyframes } from 'styled-components';

// Animação das luzes
const moveLights = keyframes`
0%, 100%{
  transform: translateY(2vh);
  opacity: 0.2;
}
50%{
  transform: translateY(-2vh);
  box-shadow: var(--neon-glow);
  opacity: 1;
}
`;

// Estilo para cada luz
export const Light = styled.div`
  position: absolute;
  padding: 0.2vh;
  border-radius: 50%;
  background: radial-gradient(circle, var(--opposite) 0%, var(--accent) 100%);
  filter: drop-shadow(0 0 0.5vh var(--accent));
  animation: ${moveLights} ease-in-out infinite;

  &:nth-child(odd) {
    animation-duration: 9s;
  }

  &:nth-child(even) {
    animation-duration: 7s;
  }
`;

export const LightsContainer = styled.div`
  z-index: ${(props) => props.$zIndex || 0};
  position: absolute;
  width: 98%;
  height: 100%;
  opacity: 0.5;
`;
