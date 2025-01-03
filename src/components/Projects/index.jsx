import { useEffect, useRef, useState } from 'react';

import { projectData } from './ProjectData';
import * as Styled from './style';
import ProjectCard from './ProjectCard';
import { Section, Button } from '../../styles/globalStyle';

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
    <Section id="projects" ref={projectsRef}>
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
      <Button onClick={handleClick}>{viewMoreClicked ? 'View Less' : 'View More'}</Button>
    </Section>
  );
};

export default Projects;
