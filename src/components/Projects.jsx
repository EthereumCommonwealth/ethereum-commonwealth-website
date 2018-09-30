import React from 'react';
import PropTypes from 'prop-types';
import {injectIntl} from 'react-intl';
import projects from '../projects.json';

import './Projects.css';
import ProjectCard from './ProjectCard';
import union from "../image/Union.svg";


function Projects({projectList, intl}) {
    return (
        <section id="projects" className="bg-grey">
            <div className={'container py-3'}>
                <h2 className={'pl-5'}>{intl.formatMessage({id: 'projects'})}
                    <img src={union} width={'15'} height={'15'}/>
                </h2>
                <hr className="bg-success my-3"/>
                <div className="row pl-5">
                    {projectList.map(project => (
                            <ProjectCard
                                project={project}
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
