import React from 'react';
import { Footer, Header, Project } from '../components';
import { ProjectsData } from '../data/ProjectsData';

function Portfolio() {
  return (
    <div className="main-projects-container">
      <Header />
      {ProjectsData.map((project) => {
        return <Project key={project.id} {...project} />;
      })}
      <Footer />
    </div>
  );
}

export default Portfolio;
