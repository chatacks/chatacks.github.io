type InputProps = {
  labelText: string;
  type: string;
  name: string;
  id: string;
  placeholder?: string;
};

function Input({ labelText, type, id, name, placeholder = '' }: InputProps) {
  return (
    <div className="contact-form-div">
      <label htmlFor={ id } className="contact-form-tag">{labelText}</label>
      <input
        className="contact-form-input"
        type={ type }
        name={ name }
        id={ id }
        placeholder={ placeholder }
      />
    </div>
  );
}

export default Input;
