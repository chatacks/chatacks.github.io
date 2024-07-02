type EducAndExpProps = {
  title: string;
  subtitle?: string;
  period: string;
};

function EducationOrExperience({ title, subtitle = '', period }: EducAndExpProps) {
  return (
    <div>
      <h3 className="qualification-title">{title}</h3>
      {subtitle && <span className="qualification-subtitle">{subtitle}</span>}
      <div className="qualification-calender">
        <i className="uil uil-calendar-alt" />
        {period}
      </div>
    </div>
  );
}

export default EducationOrExperience;
