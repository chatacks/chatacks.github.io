import ButtonQualification from './ButtonQualification';

type QualificationTabsProps = {
  toggle: number;
  handleToggle: (index: number) => void;
};

function QualificationTabs({ toggle, handleToggle }: QualificationTabsProps) {
  return (
    <div className="qualification-tabs">
      <ButtonQualification
        buttonText="Educação"
        toggle={ toggle }
        toggleValue={ 1 }
        handleToggle={ handleToggle }
        iconClass="uil uil-graduation-cap"
      />
      <ButtonQualification
        buttonText="Experiência"
        toggle={ toggle }
        toggleValue={ 2 }
        handleToggle={ handleToggle }
        iconClass="uil uil-briefcase-alt"
      />
    </div>
  );
}

export default QualificationTabs;
