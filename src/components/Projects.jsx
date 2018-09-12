import React from 'react';
import PropTypes from 'prop-types';
import {injectIntl} from 'react-intl';
import projects from '../projects.json';

import './Projects.css';
import ProjectCard from "./ProjectCard";



function Projects({projects, intl}) {
    return (
        <section id={"projects"} className={'bg-light'}>
            <div className={'container py-3'}>
                <h2 className={'text-capitalize'}>{intl.formatMessage({id: 'projects'})}</h2>
                <hr className={'bg-success my-3'}/>
                {projects.map((project, index) => {
                    return (
                       <ProjectCard
                           project={project}
                           key={project.name + index}/>
                    );
                })}
            </div>
        </section>
    );
}

Projects.propTypes = {
    projects: PropTypes.array.isRequired,
    intl: PropTypes.object.isRequired,
};
Projects.defaultProps = {
    projects,
};

export default injectIntl(Projects);
