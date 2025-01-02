import styled, { keyframes } from 'styled-components';

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
  background: radial-gradient(ellipse 60% 46% at top, var(--light-accent) 0%, var(--primary) 90%);
  text-align: center;
  color: var(--text);

  @media (max-width: 768px) {
    background: radial-gradient(ellipse 100% 35% at top, var(--light-accent) 0%, var(--primary) 90%);
  }
`;

export const HeaderContent = styled.div`
  animation: ${appearContent} 4000ms forwards;
`;
