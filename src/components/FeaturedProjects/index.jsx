import { useRef } from 'react';
import P from 'prop-types';

import { projectDataEn, projectDataPt } from './FeaturedProjectData';
import * as Styled from './style';
import ProjectCard from './FeatureProjectCard';
import { Section } from '../../styles/globalStyle';

const TITLE_EN = 'Featured projects';
const TITLE_PT = 'Projetos em destaque';

const FeaturedProjects = ({ language }) => {
  const projectData = language === 'us' ? projectDataEn : projectDataPt;

  const projectsRef = useRef(null);

  console.log(projectData[0].ghLink);

  return (
    <Section id="projects" ref={projectsRef}>
      <Styled.ProjectsTitle>
        {language === 'us' ? TITLE_EN : TITLE_PT} <hr />
      </Styled.ProjectsTitle>
      <Styled.ProjectCardsContainer>
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            deployLink={project.deployLink}
            ghLink={project.ghLink}
            tools={project.tools}
            imgLink={project.imgLink}
            index={index}
          />
        ))}
      </Styled.ProjectCardsContainer>
    </Section>
  );
};

FeaturedProjects.propTypes = {
  language: P.string,
};

export default FeaturedProjects;
