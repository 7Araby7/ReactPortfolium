import styled, { keyframes } from 'styled-components';

// Animação para o conteúdo do header
const appearContent = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Components
export const Header = styled.header`
  position: relative;
  overflow: hidden;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: radial-gradient(ellipse 60% 46% at top, var(--accent) 0%, var(--primary) 90%);
  text-align: center;
  color: var(--text);
`;

export const HeaderContent = styled.div`
  animation: ${appearContent} 4000ms forwards;
`;
