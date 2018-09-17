import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import projects from '../projects.json';

import './Projects.css';
import ProjectCard from './ProjectCard';


function Projects({ projectList, intl }) {
  return (
    <section id="projects" className="bg-light">
      <div className="container py-3">
        <h2 className="text-capitalize">{intl.formatMessage({ id: 'projects' })}</h2>
        <hr className="bg-success my-3" />
        <div className="row">
          {projectList.map(project => (
            <ProjectCard
              project={project}
              key={project.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

Projects.propTypes = {
  projectList: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
    socialNetworks: PropTypes.shape({
      url: PropTypes.string,
      prefix: PropTypes.string,
    }),
  })),
  intl: PropTypes.object.isRequired,
};
Projects.defaultProps = {
  projectList: projects,
};

export default injectIntl(Projects);
