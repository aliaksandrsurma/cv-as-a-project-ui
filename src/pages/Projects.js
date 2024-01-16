import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import { PROFILE_NAME } from '../constants';
import ProjectItem from '../components/Projects/ProjectItem';

import data from '../data/projects';

const Projects = () => (
  <Main
    title="Projects"
    description={`Learn about ${PROFILE_NAME}'s projects.`}
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2><Link to="/projects">Projects</Link></h2>
          <p>A selection of projects that I&apos;m not too ashamed of</p>
        </div>
      </header>
      {data.map((project) => (
        <ProjectItem
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Projects;
