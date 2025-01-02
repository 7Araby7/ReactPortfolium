import { useEffect, useRef, useState } from 'react';

import { projectData } from './ProjectData';
import * as Styled from './style';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [cards, setCards] = useState(projectData.slice(0, 3));
  const [viewMoreClicked, setViewMoreClicked] = useState(false);

  const projectsRef = useRef(null);

  useEffect(() => {
    setTimeout(
      () => {
        setCards(viewMoreClicked ? projectData : projectData.slice(0, 3));
      },
      viewMoreClicked ? 0 : 450,
    );
  }, [viewMoreClicked]);

  const handleClick = () => {
    setViewMoreClicked(!viewMoreClicked);
    viewMoreClicked ? projectsRef.current.scrollIntoView({ behavior: 'smooth' }) : '';
  };

  return (
    <Styled.ProjectsSection id="projects" ref={projectsRef}>
      <Styled.ProjectsTitle>
        My Projects <hr />
      </Styled.ProjectsTitle>
      <Styled.ProjectCardsContainer>
        {cards.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            tools={project.tools}
            index={index}
          />
        ))}
      </Styled.ProjectCardsContainer>
      <Styled.ViewMoreButton onClick={handleClick}>{viewMoreClicked ? 'View Less' : 'View More'}</Styled.ViewMoreButton>
    </Styled.ProjectsSection>
  );
};

export default Projects;
