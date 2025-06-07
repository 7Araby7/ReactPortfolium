import styled from 'styled-components';

// Styled Component para os ícones sociais
export const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.3s;

  svg {
    margin-inline-start: 0.56rem;
    margin-top: 1.55rem;
    display: flex;
    justify-content: center;
    height: 2.7rem;
    width: 2.7rem;
  }

  svg:hover {
    fill: var(--accent);
    transform: scale(1.1);
  }
`;
