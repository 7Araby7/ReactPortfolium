import * as Styled from './style';
import LinkedinIcon from '../../../assets/LinkedinIcon.jsx';
import GithubIcon from '../../../assets/GithubIcon.jsx';

const SocialIcon = () => {
  return (
    <Styled.SocialIcon>
      <a href="https://github.com/7Araby7" target="_blank" rel="noopener noreferrer">
        <GithubIcon color="var(--text)" />
      </a>
      <a href="https://www.linkedin.com/in/gabriel-brunhara-049b43248/" target="_blank" rel="noopener noreferrer">
        <LinkedinIcon color="var(--text)" />
      </a>
    </Styled.SocialIcon>
  );
};

export default SocialIcon;
