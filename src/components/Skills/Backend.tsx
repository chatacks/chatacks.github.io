import SkillsHabilities from './SkillsHabilities';

function Backend() {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Backend</h3>

      <div className="skills-box">
        <div className="skills-group">
          <div className="skills-data">
            <i className="bx bxl-nodejs" />
            <SkillsHabilities name="Node.js" level="Avançado" />
          </div>

          <div className="skills-data">
            <i className="bx bx-badge-check" />
            <SkillsHabilities name="Express.js" level="Avançado" />
          </div>

          <div className="skills-data">
            <i className="bx bx-badge-check" />
            <SkillsHabilities name="MySQL" level="Avançado" />
          </div>
        </div>

        <div className="skills-group">
          <div className="skills-data">
            <i className="bx bxl-docker" />
            <SkillsHabilities name="Docker" level="Básico" />
          </div>

          <div className="skills-data">
            <i className="bx bxl-typescript" />
            <SkillsHabilities name="TypeScript" level="Avançado" />
          </div>

          <div className="skills-data">
            <i className="bx bxl-python" />
            <SkillsHabilities name="Python" level="Básico" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Backend;
