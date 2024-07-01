import Backend from './Backend';
import Frontend from './Frontend';
import './Skills.css';

function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Habilidades</h2>
      <span className="section-subtitle">Nível Técnico</span>

      <div className="skills-container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
}

export default Skills;
