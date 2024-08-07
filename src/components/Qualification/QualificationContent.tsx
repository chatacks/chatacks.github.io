import EducationOrExperience from './EducationOrExperience';
import LineAndRounder from './LineAndRounder';

type QualificationContentProps = {
  toggle: number;
};

function QualificationContent({ toggle }: QualificationContentProps) {
  return (
    <div className="qualification-sections">
      <div
        className={ toggle === 1
          ? 'qualification-content qualification-content-active'
          : 'qualification-content' }
      >
        <div className="qualification-data">
          <EducationOrExperience
            title="Desenvolvimento Web FullStack"
            subtitle="Escola de Tecnologia - Trybe"
            period="06/2023 - 07/2024"
          />
          <LineAndRounder />
        </div>

        <div className="qualification-data">
          <div> </div>
          <LineAndRounder />
          <EducationOrExperience
            title="Formação React.js T6 - ONE"
            subtitle="Alura/Oracle"
            period="03/2024 - 07/2024"
          />
        </div>
        <div className="qualification-data">
          <EducationOrExperience
            title="Formação Iniciante em Programação T6 - ONE"
            subtitle="Alura/Oracle"
            period="01/2024 - 06/2024"
          />
          <LineAndRounder />
        </div>

      </div>

      <div
        className={ toggle === 2
          ? 'qualification-content qualification-content-active'
          : 'qualification-content' }
      >
        <div className="qualification-data">
          <EducationOrExperience
            title="Desenvolvedor FullStack"
            subtitle="Freelancer"
            period="2024 - Presente"
          />
          <LineAndRounder />
        </div>
      </div>
    </div>
  );
}

export default QualificationContent;
