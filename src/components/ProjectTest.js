// import { useState } from 'react';
import { Header } from '../components';
import '../card.scss';
import { FaArrowRight, FaNode, FaReact } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';
// import { ProjectsData } from '../data/ProjectsData';
const ProjectTest = () => {
  return (
    <div>
      <Header />
      <div className="cards-container mt-40 flex flex-wrap justify-center">
        <article className="card">
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

        <article className="card card-2">
          <h2>Audio</h2>
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

        <article className="card card-3">
          <h2>Feed</h2>
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

        <article className="card card-4">
          <h2>Inv</h2>
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
      </div>
    </div>
  );
};

export default ProjectTest;
