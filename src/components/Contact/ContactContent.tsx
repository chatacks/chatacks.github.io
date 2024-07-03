import ContactCard from './ContactCard';

function ContactContent() {
  return (
    <div className="contact-content">
      <h3 className="contact-title">Fale Comigo</h3>
      <div className="contact-info">
        <ContactCard
          textTitle="Email"
          spanText="chatack.tc@gmail.com"
          href="mailto:chatack.tc@gmail.com"
          iconClass="bx-mail-send"
        />

        <ContactCard
          textTitle="Whatsapp"
          spanText="+55 (21) 9 96634-4069"
          href="https://api.whatsapp.com/send?phone=5521966344069&text=Ol%C3%A1%2CThyago!%20Entro%20em%20contato%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seu%20trabalho."
          targetBlank="_blank"
          iconClass="bxl-whatsapp"
        />

        <ContactCard
          textTitle="Linkedin"
          spanText="Thyago Chatack"
          href="https://www.linkedin.com/in/thyago-chatack/"
          targetBlank="_blank"
          iconClass="bxl-linkedin-square"
        />
      </div>
    </div>
  );
}

export default ContactContent;
