import styled, { keyframes } from 'styled-components';

const apearColors = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100px) rotate(225deg);
  }
  20% {
    opacity: 0;
    transform: translateY(-100px) rotate(225deg);
  }
  100% {
    opacity: 1;
  }
`;

export const colorPicker = styled.div`
  position: absolute;
  bottom: 2.7vh;
  right: 3.8vh;
  display: flex;
  gap: 0px;
  z-index: 10;
`;

export const Button = styled.button`
  margin: 0;
  border: none;
  padding: 1.5vh 3vh;
  transform: rotate(225deg);
  border-radius: 60vh 0vh 30vh 0vh;
  cursor: pointer;
  z-index: 2;
  opacity: 0;
  animation: ${apearColors} 3000ms forwards;
  animation-delay: ${(props) => `calc(0.15s * (${props.index} - 1))`};
  left: ${(props) => 8.1 - (props.index - 1) * 1.1}vh;

  &:hover {
    transform: scale(1.2) rotate(225deg);
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
  filter: drop-shadow(0 0 3.5px #ff1313);
`;

export const ButtonOrange = styled(Button)`
  background-color: #ff8d13;
  filter: drop-shadow(0 0 3.5px #ff8d13);
`;

export const ButtonYellow = styled(Button)`
  background-color: #fffb13;
  filter: drop-shadow(0 0 3.5px #fffb13);
`;

export const ButtonGreen = styled(Button)`
  background-color: #1bff13;
  filter: drop-shadow(0 0 3.5px #1bff13);
`;

export const ButtonTeal = styled(Button)`
  background-color: #13ffe3;
  filter: drop-shadow(0 0 3.5px #13ffe3);
`;

export const ButtonBlue = styled(Button)`
  background-color: #13d0ff;
  filter: drop-shadow(0 0 3.5px #13d0ff);
`;

export const ButtonPurple = styled(Button)`
  background-color: #a513ff;
  filter: drop-shadow(0 0 3.5px #a513ff);
`;

export const ButtonPink = styled(Button)`
  background-color: #ff13d0;
  filter: drop-shadow(0 0 3.5px #ff13d0);
`;

export const ButtonMagenta = styled(Button)`
  background-color: #ff13ff;
  filter: drop-shadow(0 0 3.5px #ff13ff);
`;

export const ButtonTheme = styled(Button)`
  background-color: var(--opposite);
  filter: drop-shadow(0 0 3.5px var(--opposite));
`;
