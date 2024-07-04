import './Footer.css';
import FooterList from './FooterList';
import FooterSocial from './FooterSocial';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <h1 className="footer-title">chatacks.dev</h1>

        <FooterList />
        <FooterSocial />
        <span className="footer-copy">
          &#169; Thyago Chatack. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
