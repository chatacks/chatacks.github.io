type ContactCardProps = {
  textTitle: string;
  spanText: string;
  href: string;
  iconClass: string;
};

function ContactCard({ textTitle, spanText, href, iconClass }: ContactCardProps) {
  return (
    <div className="contact-card">
      <i className="bx bx contact-card-icon" />

      <h3 className="contact-card-title">{textTitle}</h3>
      <span className="contact-card-data">{spanText}</span>

      <a href={ href } className="contact-button">
        Escrever-me
        <i className={ `bx ${iconClass} contact-button-icon` } />
      </a>
    </div>
  );
}

export default ContactCard;
