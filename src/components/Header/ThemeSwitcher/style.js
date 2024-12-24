import styled, { keyframes, css } from 'styled-components';

// Animações
const apearTheme = keyframes`
  from {
    /* opacity: 0;
    transform: translateY(-800px); */
    opacity: 1;
    transform: translateY(0);
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
    transform: translateY(40px);
  }
  50% {
    transform: translateY(-300px);
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

  ${({ animate }) =>
    animate &&
    css`
      animation: ${changeTheme} 1000ms forwards;
    `}/*   &.moon {
    button {
      left: -5px;
      padding: 18px;
      background-color: transparent;
      box-shadow: -10px 3px 1px 9px var(--opposite);
    }
  } */
`;

export const Button = styled.button`
  border: none;
  left: -2.9vh;
  top: 8vh;
  position: absolute;
  padding: 3vh;
  z-index: 2;
  border-radius: 50%;
  animation: ${apearTheme} 3000ms forwards;
  background-color: var(--opposite);
  filter: drop-shadow(0 0 20px var(--opposite));
`;

export const Line = styled.div`
  border: solid 0.3vh var(--opposite);
  top: -5.8vh;
  height: 13.5vh;
  position: absolute;
  z-index: 1;
  animation: ${apearTheme} 3000ms forwards;
`;

/* export const Hole = styled.div`
  position: fixed;
  border-radius: 50%;
  background-color: var(--primary);
  box-shadow: inset 5px 0px 10px rgba(0, 0, 0, 0.562);
  ${({ variant }) =>
    variant === 1 &&
    css`
      left: 10px;
      top: 15%;
      padding: 12px;
    `}
  ${({ variant }) =>
    variant === 2 &&
    css`
      right: 10px;
      bottom: 25%;
      padding: 5px;
    `}
  ${({ isMoon }) =>
    !isMoon &&
    css`
      display: none;
    `}
`;
 */
