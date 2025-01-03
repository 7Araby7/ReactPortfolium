import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';
    width: 10px;
    height: 10px;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-top: 2px solid var(--accent);
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
  }
`;

export default Spinner;
