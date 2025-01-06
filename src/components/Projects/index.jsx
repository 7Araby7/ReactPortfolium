import { useEffect, useRef, useState } from 'react';
import P from 'prop-types';

import { projectDataEn, projectDataPt } from './ProjectData';
import * as Styled from './style';
import ProjectCard from './ProjectCard';
import { Section, Button } from '../../styles/globalStyle';

const TITLE_EN = 'Other Projects';
const TITLE_PT = 'Outros Projetos';

const VIEWMORE_EN = 'view more';
const VIEWMORE_PT = 'ver mais';
const VIEWLESS_EN = 'view less';
const VIEWLESS_PT = 'ver menos';

const Projects = ({ language }) => {
  const projectData = language === 'us' ? projectDataEn : projectDataPt;
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
  }, [projectData, viewMoreClicked]);

  const handleClick = () => {
    setViewMoreClicked(!viewMoreClicked);
    viewMoreClicked ? projectsRef.current.scrollIntoView({ behavior: 'smooth' }) : '';
  };

  return (
    <Section ref={projectsRef}>
      <Styled.ProjectsTitle>
        {language === 'us' ? TITLE_EN : TITLE_PT} <hr />
      </Styled.ProjectsTitle>
      <Styled.ProjectCardsContainer>
        {cards.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            tools={project.tools}
          />
        ))}
      </Styled.ProjectCardsContainer>
      <Button $padding={'1rem 2rem'} $fontSize={'1.2rem'} $marginTop={'2rem'} onClick={handleClick}>
        {viewMoreClicked
          ? language === 'us'
            ? VIEWLESS_EN
            : VIEWLESS_PT
          : language === 'us'
            ? VIEWMORE_EN
            : VIEWMORE_PT}
      </Button>
    </Section>
  );
};

Projects.propTypes = {
  language: P.string,
};

export default Projects;
