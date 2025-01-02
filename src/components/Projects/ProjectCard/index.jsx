import PropTypes from 'prop-types';
import { FaFolder } from 'react-icons/fa';
import { FaRegFolderOpen } from 'react-icons/fa6';
import { FiGithub } from 'react-icons/fi';
import { useState } from 'react';

import * as Styled from './style';
import MotionWrapper from '../../../utils/MotionWrapper';

const ProjectCard = ({ title, description, link, tools, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleTouchStart = (e) => {
    e.currentTarget.classList.add('hover-active');
    setIsHovered(true);
  };

  const handleTouchEnd = (e) => {
    e.currentTarget.classList.remove('hover-active');
    setIsHovered(false);
  };

  const fadeInVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      <MotionWrapper variants={fadeInVariants} threshold={0.4}>
        <Styled.ProjectCard
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={handleMouseEnter}
          onTouchStart={handleTouchStart}
          onMouseLeave={handleMouseLeave}
          onTouchEnd={handleTouchEnd}
        >
          <Styled.FolderIconWrapper>
            {isHovered ? <FaRegFolderOpen size={40} color="var(--text)" /> : <FaFolder size={40} color="var(--text)" />}
          </Styled.FolderIconWrapper>
          <Styled.GithubIconWrapper>
            <FiGithub size={40} color="var(--text)" />
          </Styled.GithubIconWrapper>
          <Styled.ProjectTitle>{title}</Styled.ProjectTitle>
          <Styled.ProjectDescription>{description}</Styled.ProjectDescription>
          <Styled.ProjectTools>
            {tools.map((tool, idx) => (
              <span key={idx}>{tool}</span>
            ))}
          </Styled.ProjectTools>
        </Styled.ProjectCard>
      </MotionWrapper>
    </>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  tools: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
};

export default ProjectCard;
