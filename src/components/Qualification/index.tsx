import { useState } from 'react';
import './Qualification.css';
import QualificationTabs from './QualificationTabs';
import QualificationContent from './QualificationContent';

function Qualification() {
  const [toggle, setToggle] = useState(1);

  const handleToggle = (index: number) => {
    setToggle(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section-title">
        Qualificações
      </h2>
      <span className="section-subtitle">Minha Jornada Pessoal</span>

      <div className="qualification-container container">
        <QualificationTabs toggle={ toggle } handleToggle={ handleToggle } />
        <QualificationContent toggle={ toggle } />
      </div>

    </section>
  );
}

export default Qualification;
