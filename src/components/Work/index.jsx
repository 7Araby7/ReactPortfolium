import './style.css'; // CSS específico para o componente Work
import ProjectCard from '../ProjectCard';

const Work = () => (
  <section className="section" id="work">
    <h2>My Work</h2>
    <div className="project-cards">
      <ProjectCard
        title="Project 1"
        description="A cool project description"
        link="https://github.com/7Araby7/project1"
      />
      <ProjectCard
        title="Project 2"
        description="Another interesting project"
        link="https://github.com/7Araby7/project2"
      />
      <ProjectCard
        title="Project 3"
        description="A simple project with a great impact"
        link="https://github.com/7Araby7/project3"
      />
    </div>
  </section>
);

export default Work;
