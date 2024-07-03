type TextAreaProps = {
  labelText: string;
  name: string;
  id: string;
  placeholder?: string;
};

function TextArea({ labelText, id, name, placeholder = '' }: TextAreaProps) {
  return (
    <div className="contact-form-div">
      <label htmlFor={ id } className="contact-form-tag">{labelText}</label>
      <textarea
        className="contact-form-input"
        cols={ 30 }
        rows={ 10 }
        name={ name }
        id={ id }
        placeholder={ placeholder }
      />
    </div>
  );
}

export default TextArea;
