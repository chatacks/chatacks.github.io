type TextAreaProps = {
  labelText: string;
  name: string;
  id: string;
  placeholder?: string;
  value: string;
  onChange: (event:
  React.ChangeEvent<HTMLInputElement
  | HTMLTextAreaElement>) => void;
};

function TextArea({
  labelText,
  id,
  name,
  placeholder = '',
  value,
  onChange }: TextAreaProps) {
  return (
    <div className="contact-form-div contact-form-area">
      <label htmlFor={ id } className="contact-form-tag">{labelText}</label>
      <textarea
        className="contact-form-input"
        cols={ 30 }
        rows={ 10 }
        name={ name }
        id={ id }
        placeholder={ placeholder }
        value={ value }
        onChange={ onChange }
      />
    </div>
  );
}

export default TextArea;
