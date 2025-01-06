import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import * as Styled from './style';
import MotionWrapper from '../../../utils/MotionWrapper';

const ProjectCard = ({ title, description, link, tools, index }) => {
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
          <Styled.Img $side={side} href={link} target="_blank" rel="noopener noreferrer">
            <img src="/ReactPortfolium/assets/img/teste.png" alt="site teste" />
          </Styled.Img>
          <Styled.ProjectTitle $side={side}>{title}</Styled.ProjectTitle>
          <Styled.ProjectDescription $side={side}>{description}</Styled.ProjectDescription>
          <Styled.ProjectTools $side={side}>
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
