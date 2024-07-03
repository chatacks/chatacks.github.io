type ContactCardProps = {
  textTitle: string;
  spanText: string;
  href: string;
  targetBlank?: string
  iconClass: string;
};

function ContactCard({ textTitle,
  spanText,
  href,
  targetBlank = '',
  iconClass }: ContactCardProps) {
  return (
    <div className="contact-card">
      <i className={ `bx ${iconClass} contact-card-icon` } />

      <h3 className="contact-card-title">{textTitle}</h3>
      <span className="contact-card-data">{spanText}</span>

      <a
        href={ href }
        target={ targetBlank }
        className="contact-button"
        rel="noopener noreferrer"
      >
        Escrever-me
        <i className="bx bx-right-arrow-alt contact-button-icon" />
      </a>
    </div>
  );
}

export default ContactCard;
