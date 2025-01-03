import styled from 'styled-components';

export const ContactTitle = styled.h2``;

export const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 247, 255, 0.2);
  border-radius: 5px;
  color: var(--text);
  transition: all 0.3s;

  &:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: var(--neon-glow);
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 247, 255, 0.2);
  border-radius: 5px;
  color: var(--text);
  transition: all 0.3s;

  &:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: var(--neon-glow);
  }
`;

export const Button = styled.button`
  background: transparent;
  color: var(--accent);
  border: 1px solid var(--accent);
  padding: 1rem 2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.6s;
  position: relative;
  overflow: hidden;

  &.contact::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--accent);
    z-index: -1;
    border-radius: 0 0 50% 50%;
    height: 0%;
    transition: all 0.6s;
  }

  &.contact:hover {
    color: var(--text);
  }

  &.contact:hover::before {
    height: 190%;
  }
`;
