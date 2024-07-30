import Slider from '../SwiperCarousel';
import { projects } from './projectsInfos';

function ProjectList() {
  return (
    <div className="project-container">
      <Slider projects={ projects } />
    </div>
  );
}

export default ProjectList;
