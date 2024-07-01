import SkillsHabilities from './SkillsHabilities';

function Frontend() {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Frontend</h3>

      <div className="skills-box">
        <div className="skills-group">
          <div className="skills-data">
            <i className="bx bxl-react" />
            <SkillsHabilities name="React.js" level="Avançado" />
          </div>

          <div className="skills-data">
            <i className="bx bxl-javascript" />
            <SkillsHabilities name="JavaScript" level="Avançado" />
          </div>

          <div className="skills-data">
            <i className="bx bxl-typescript" />
            <SkillsHabilities name="TypeScript" level="Avançado" />
          </div>
        </div>

        <div className="skills-group">
          <div className="skills-data">
            <i className="bx bxl-css3" />
            <SkillsHabilities name="CSS" level="Avançado" />
          </div>

          <div className="skills-data">
            <i className="bx bxl-tailwind-css" />
            <SkillsHabilities name="TailWind CSS" level="Básico" />
          </div>

          <div className="skills-data">
            <i className="bx bxl-redux" />
            <SkillsHabilities name="Redux" level="Avançado" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frontend;
