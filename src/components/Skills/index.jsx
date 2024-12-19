import './style.css'; // CSS específico para o componente Skills

const Skills = () => (
  <section className="section" id="skills">
    <h2>Skills & Expertise</h2>
    <div className="skills">
      {['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Python', 'UI/UX Design', 'Responsive Design', 'Git'].map(
        (skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ),
      )}
    </div>
  </section>
);

export default Skills;
