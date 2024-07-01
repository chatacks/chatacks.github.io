import './About.css';
import CV from '../../assets/currículo-Thyago-Chatack.pdf';
import AboutDescription from './AboutDescription';
import DownloadCvButton from './DownloadCvButton';
import Infos from './Infos';
import chatackImage from '../../assets/thyago_chatack.jpeg';

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">Sobre mim</h2>
      <span className="section-subtitle">Introdução</span>

      <div className="about-container container grid">

        <img src={ chatackImage } alt="Thyago Chatack" className="about-img" />
        <div className="about-data">
          <Infos />
          <AboutDescription />
          <DownloadCvButton CV={ CV } />
        </div>
      </div>
    </section>
  );
}

export default About;
