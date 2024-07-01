type SkillHabilitiesProps = {
  name: string;
  level: string;
};

function SkillsHabilities({ name, level }: SkillHabilitiesProps) {
  return (
    <div>
      <h3 className="skills-name">{name}</h3>
      <span className="skills-level">{level}</span>
    </div>
  );
}

export default SkillsHabilities;
