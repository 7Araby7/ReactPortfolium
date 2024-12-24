import PropTypes from 'prop-types';
import './style.css'; // CSS específico para o componente ProjectCard

const ProjectCard = ({ title, description, link }) => (
  <div className="project-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" className="btn">
      View Project
    </a>
  </div>
);

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectCard;
