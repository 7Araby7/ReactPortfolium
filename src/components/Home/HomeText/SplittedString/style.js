import styled, { css, keyframes } from 'styled-components';

const lighting = keyframes`
  0%, 100% {
    color: var(--text);
    text-shadow: none;
  }
  75% {
    color: var(--accent);
    text-shadow: var(--neon-glow);
  }
`;
const typing = keyframes`
  from{
    opacity: 0;
    transform: translateY(-5%);
  }
  to{
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StringContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;

export const Letter = styled.h1`
  opacity: 0;
  margin: 0;
  font-size: 4.64rem;
  font-weight: bold;
  color: var(--text);
  user-select: none;
  /* animation: ${lighting} 2s normal; */
  animation: ${typing} 0.1s linear forwards;

  ${({ $index, $delay }) => css`
    /* animation-delay: ${($index + $delay - 1) * 0.15 + 1}s; */
    animation-delay: ${($index + $delay - 1) * 0.1 + 1}s;
  `}

  &:hover {
    color: var(--accent);
    text-shadow: var(--neon-glow);
    transform: scale(1.15) translateY(-0.174rem);
  }

  @media (max-width: 768px) {
    font-size: 3.5rem;
    /* ${({ $index, $delay }) => css`
      animation-delay: ${($index - 1) * 0.15}s;
    `} */
  }
`;
