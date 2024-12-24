import styled, { keyframes, css } from 'styled-components';

// Animações
const apearTheme = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50vh);
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
    transform: translateY(4vh);
  }
  50% {
    transform: translateY(-30vh);
  }
`;

// Componentes Styled
export const ThemeSwitcher = styled.div`
  position: absolute;
  top: 1.2vh;
  left: 8vh;
  display: flex;
  flex-direction: column;
  gap: 1vh;
  z-index: 10;

  ${({ $animate }) =>
    $animate &&
    css`
      animation: ${changeTheme} 1000ms forwards;
    `}
`;

export const Button = styled.button`
  border: none;
  left: -2.9vh;
  top: 8vh;
  position: absolute;
  padding: 0;
  z-index: 2;
  border-radius: 50%;
  animation: ${apearTheme} 3000ms forwards;
  background-color: var(--opposite);
  filter: drop-shadow(0 0 2vh var(--opposite));
  overflow: hidden;
  width: 6vh;
  height: 6vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Line = styled.div`
  border: solid 0.3vh var(--opposite);
  top: -5.8vh;
  height: 13.5vh;
  position: absolute;
  z-index: 1;
  animation: ${apearTheme} 3000ms forwards;
`;

export const Icon = styled.svg`
  width: 4vh;
  height: 4vh;
  ${({ $isMoon }) =>
    !$isMoon &&
    css`
      display: none;
    `}
`;
