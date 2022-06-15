import { Link } from 'react-router-dom';
import { Divider } from '../components';

const Project = ({ id, title, description, image }) => {
  return (
    <section className="project-container e-com px-8 flex flex-col mt-10 tablet:mt-24 tablet:px-10 laptop:px-40">
      <Link to={`/projects/${id}`}>
        <div className="project-snap project-card">
          <img
            className="h-full w-full rounded-md"
            src={image}
            alt="project-snap"
          />
        </div>
      </Link>
      <div className="project-description">
        <Divider />
        <h3 className="text-very-light-grey mt-6">{title}</h3>
        <hr className="h-two-px w-10 mt-2 mb-6 bg-desaturated-cyan" />
        <p className="text-very-light-grey mb-6 project-description-text">
          {description}
        </p>
        <Link to={`/projects/${id}`}>
          <button className="w-52 h-12 mt-8 mb-16  border-very-light-grey text-very-light-grey border">
            VIEW PROJECT
          </button>
        </Link>

        <Divider />
      </div>
    </section>
  );
};

export default Project;
