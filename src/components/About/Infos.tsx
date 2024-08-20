/* eslint-disable prefer-const */
import { useEffect, useState } from 'react';
import getGithubRepositories from '../../services/getGithubRepositories';

function Infos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const fetchEffect = async () => {
      try {
        const repositories = await getGithubRepositories();
        if (isMounted) {
          setData(repositories);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchEffect();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="about-info grid">
      <div className="about-box">
        <i className="bx bx-award about-icon" />
        <h3 className="about-title">Experiência</h3>
        <span className="about-subtitle">1 Ano de Experiência</span>
      </div>

      <div className="about-box">
        <i className="bx bx-briefcase-alt about-icon" />
        <h3 className="about-title">Projetos</h3>
        <span className="about-subtitle">{`${data.length} Projetos Feitos`}</span>
      </div>

    </div>
  );
}

export default Infos;
