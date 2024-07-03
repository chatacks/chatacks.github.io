import Form from '../Form';
import ContactContent from './ContactContent';
import './Contact.css';

function Contact() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Entre em contato</h2>
      <span className="section-subtitle">Contate-me</span>

      <div className="contact-container container grid">
        <ContactContent />

        <Form />
      </div>
    </section>
  );
}

export default Contact;
