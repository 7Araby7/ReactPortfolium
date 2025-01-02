import { FaGithub, FaLinkedin } from 'react-icons/fa';

import * as Styled from './style';

const SocialIcon = () => {
  return (
    <Styled.SocialIcon>
      <a href="https://github.com/7Araby7" target="_blank" rel="noopener noreferrer">
        <FaGithub color="var(--text)" />
      </a>
      <a href="https://www.linkedin.com/in/gabriel-brunhara-049b43248/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin color="var(--text)" />
      </a>
    </Styled.SocialIcon>
  );
};

export default SocialIcon;
