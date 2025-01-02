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

export const StringContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;

export const Letter = styled.h1`
  margin: 0;
  font-size: 4.64rem;
  font-weight: bold;
  color: var(--text);
  user-select: none;
  animation: ${lighting} 2s normal;

  ${({ $index, $delay }) => css`
    animation-delay: ${($index + $delay - 1) * 0.15}s;
  `}

  &:hover {
    color: var(--accent);
    text-shadow: var(--neon-glow);
    transform: scale(1.15) translateY(-0.174rem);
  }

  @media (max-width: 768px) {
    font-size: 3.5rem;
    ${({ $index, $delay }) => css`
      animation-delay: ${($index - 1) * 0.15}s;
    `}
  }
`;
