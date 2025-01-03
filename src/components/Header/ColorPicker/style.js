import styled, { keyframes } from 'styled-components';

const apearColors = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-7.5rem) rotate(225deg);
  }
  20% {
    opacity: 0;
    transform: translateY(-7.5rem) rotate(225deg);
  }
  100% {
    opacity: 1;
  }
`;

export const colorPicker = styled.div`
  position: absolute;
  bottom: 1.35rem;
  right: 1.9rem;
  display: flex;
  gap: 0;
  z-index: 0;

  @media (max-width: 768px) {
    right: auto;
    transform: translateX(-1.45rem);
    bottom: 2rem;
  }
`;

export const Button = styled.button`
  position: relative;
  margin: 0;
  border: none;
  padding: 0.75rem 1.5rem;
  transform: rotate(225deg);
  border-radius: 30rem 0rem 15rem 0rem;
  cursor: pointer;
  z-index: 2;
  opacity: 0;
  animation: ${apearColors} 3000ms forwards;
  animation-delay: ${(props) => `calc(0.15s * (${props.$index} - 1))`};
  left: ${(props) => 4.05 - (props.$index - 1) * 0.55}rem;

  &:hover {
    transform: scale(1.2) rotate(225deg);
  }

  @media (max-width: 768px) {
    padding: 0.65rem 1.3rem;
  }
`;

export const Hole = styled.div`
  position: absolute;
  padding: 0%;
  margin: 0;
  right: 2%;
  bottom: 10%;
  width: 40%;
  height: 80%;
  border-radius: 50%;
  background: var(--primary);
  opacity: 0.7;
`;

export const ButtonRed = styled(Button)`
  background-color: #ff1313;
`;

export const ButtonOrange = styled(Button)`
  background-color: #ff8d13;
`;

export const ButtonYellow = styled(Button)`
  background-color: #fffb13;
`;

export const ButtonGreen = styled(Button)`
  background-color: #1bff13;
`;

export const ButtonTeal = styled(Button)`
  background-color: #13ffe3;
`;

export const ButtonBlue = styled(Button)`
  background-color: #13d0ff;
`;

export const ButtonPurple = styled(Button)`
  background-color: #a513ff;
`;

export const ButtonPink = styled(Button)`
  background-color: #ff13d0;
`;

export const ButtonMagenta = styled(Button)`
  background-color: #ff13ff;
`;

export const ButtonTheme = styled(Button)`
  background-color: var(--opposite);
`;
