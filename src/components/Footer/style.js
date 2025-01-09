import styled from 'styled-components';

export const Footer = styled.footer`
  border-top: 2px solid var(--accent);
  background-color: var(--primary);
  color: var(--text); /* Cor do texto */
  padding: 2rem 0;
  text-align: center;
  font-size: 1rem;
  position: relative;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;

  p {
    margin: 0;
  }
`;
