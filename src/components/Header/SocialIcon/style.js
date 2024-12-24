import styled from 'styled-components';

// Styled Component para os ícones sociais
export const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  fill: var(--text);
  transition: all 0.3s;

  svg {
    margin-inline-start: 1.2vh;
    margin-top: 3.2vh;
    display: flex;
    justify-content: center;
    width: 5.5vh;
  }

  svg:hover {
    fill: var(--accent);
    transform: scale(1.1);
    filter: drop-shadow(0 0 0.5vh var(--accent));
  }
`;
