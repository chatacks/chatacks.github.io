import ProjectList from './ProjectList';
import './Projects.css';

function Projects() {
  return (
    <section className="projects section" id="projects">
      <h2 className="section-title">Projetos</h2>
      <span className="section-subtitle">Projetos Recentes</span>

      <div className="portfolio-container container">
        <ProjectList />
      </div>
    </section>
  );
}

export default Projects;
