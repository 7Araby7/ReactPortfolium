import { FiGithub } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import * as Styled from './style';
import MotionWrapper from '../../../utils/MotionWrapper';

const ProjectCard = ({ title, description, deployLink, ghLink, tools, imgLink, index }) => {
  const [threshold, setThreshold] = useState(0.1);
  const side = index % 2 === 0;
  const position = side ? 300 : -300;

  const fadeInVariants = {
    hidden: { opacity: 0, x: position, transition: { duration: 0.5 } },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const updateThreshold = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setThreshold(0.1);
    } else {
      setThreshold(0.4);
    }
  };

  useEffect(() => {
    updateThreshold();
    window.addEventListener('resize', updateThreshold);

    return () => {
      window.removeEventListener('resize', updateThreshold);
    };
  }, []);

  return (
    <>
      <MotionWrapper variants={fadeInVariants} threshold={threshold}>
        <Styled.ProjectCard $side={side}>
          <Styled.MobileLink href={deployLink} target="_blank" rel="noopener noreferrer" />
          <Styled.Img $side={side} href={deployLink} target="_blank" rel="noopener noreferrer">
            <img src={imgLink} alt={title} />
          </Styled.Img>
          <Styled.ProjectTitle $side={side}>{title}</Styled.ProjectTitle>
          <Styled.ProjectDescription $side={side}>{description}</Styled.ProjectDescription>
          <Styled.ProjectTools $side={side}>
            {tools.map((tool, idx) => (
              <span key={idx}>{tool}</span>
            ))}
          </Styled.ProjectTools>
          <Styled.ghIcon $side={side}>
            <a href={ghLink} target="_blank" rel="noopener noreferrer">
              <FiGithub color="var(--text)" size={30} />
            </a>
          </Styled.ghIcon>
        </Styled.ProjectCard>
      </MotionWrapper>
    </>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  deployLink: PropTypes.string.isRequired,
  ghLink: PropTypes.string.isRequired,
  tools: PropTypes.array.isRequired,
  imgLink: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default ProjectCard;
