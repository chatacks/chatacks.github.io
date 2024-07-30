/* eslint-disable react/jsx-max-depth */
/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Project } from '../Projects/projectsInfos';

type SliderProps = {
  projects: Project[]
};

function Slider({ projects }: SliderProps) {
  return (
    <Swiper
      navigation
      modules={ [Navigation] }
      className="mySwiper"
    >
      {projects.map((project) => (
        <SwiperSlide key={ project.title }>
          <div className="portfolio-content grid">
            <img src={ project.image } alt={ project.title } className="portfolio-img" />

            <div className="portfolio-data">
              <h3 className="portfolio-title">{ project.title }</h3>
              <p className="portfolio-description">{ project.description }</p>
              <div className="portfolio-icons">
                <a
                  href={ project.deploy }
                  className="button button--flex button--small portfolio-button"
                  target="_blank"
                  aria-label="Link do Projeto"
                  rel="noreferrer"
                >
                  Deploy
                  <i className="uil uil-arrow-right portfolio-button-icon" />
                </a>
                <a
                  href={ project.github }
                  className="portfolio-social-link"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Github"
                >
                  <i className="bx bxl-github" />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
