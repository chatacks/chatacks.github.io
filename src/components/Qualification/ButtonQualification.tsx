// Componente ButtonQualification
interface ButtonQualificationProps {
  toggle: number;
  handleToggle: (value: number) => void;
  toggleValue: number;
  iconClass: string;
  buttonText: string;
}

function ButtonQualification({ toggle,
  handleToggle,
  toggleValue,
  iconClass,
  buttonText }: ButtonQualificationProps) {
  return (

    <button
      className={ toggle === toggleValue
        ? 'qualification-button qualification-active button--flex'
        : 'qualification-button button--flex' }
      onClick={ () => handleToggle(toggleValue) }
    >
      <i className={ `i ${iconClass} qualification-icon` } />
      {buttonText}
    </button>
  );
}

export default ButtonQualification;
