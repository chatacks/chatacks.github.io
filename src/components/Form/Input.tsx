type InputProps = {
  labelText: string;
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  value: string;
  onChange: (event:
  React.ChangeEvent<HTMLInputElement
  | HTMLTextAreaElement>) => void;
  showError?: boolean;
};

function Input({ labelText,
  type,
  id,
  name,
  placeholder = '',
  value,
  onChange,
  showError = false,

}: InputProps) {
  return (

    <div className="contact-form-div">
      <label htmlFor={ id } className="contact-form-tag">{labelText}</label>
      <input
        className="contact-form-input"
        type={ type }
        name={ name }
        value={ value }
        id={ id }
        placeholder={ placeholder }
        onChange={ onChange }
        required
      />
      {showError && <div className="error-email"> Email inválido</div>}
    </div>

  );
}

export default Input;
