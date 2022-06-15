import { Link } from 'react-router-dom';
import { Divider } from '.';
import { FaArrowRight, FaNode, FaReact } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';
import '../card.scss';

const Projectcop = ({ id, title, description }) => {
  return (
    <section className="project-container e-com px-8 flex flex-col mt-10 tablet:grid tablet:grid-cols-3 tablet:mt-24 tablet:px-10 laptop:px-40">
      <Link to={`/projects/${id}`}>
        <article className="card border-4 border-bright-red">
          <h2>Dev</h2>
          <FaArrowRight className="icon fa-arrow-right" />
          <p>Full-Stack</p>
          <div className="pic"></div>
          <ul className="social">
            <li>
              <FaReact className="icon" />
            </li>
            <li>
              <FaNode className="icon" />
            </li>
            <li>
              <SiExpress className="icon" />
            </li>
            <li>
              <SiMongodb className="icon" />
            </li>
          </ul>
          <button></button>
        </article>
      </Link>

      <div className="project-description tablet:hidden">
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

export default Projectcop;
