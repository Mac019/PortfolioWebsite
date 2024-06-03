import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="project-list">
          {/* Add your projects here */}
          <div className="project-item">WebRTCFileSharingApp</div>
          <div className="project-item">Tic-Tac-Toe</div>
          <div className="project-item">Calculator</div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
