'use strict';

import {injectIntl} from 'react-intl';
import projects from '../projects.json';
var React = require('react');
var PropTypes = require('prop-types');


function Projects({projects, intl}) {
    return (
        <section id={"projects"} className={'bg-gray'}>
            <h3>{intl.formatMessage({id: 'projects'})}</h3>

            <div className={"row"}>
                {projects.map((project, index) => {

                    return (
                        <div key={project.name + index}>
                            <div className="card">
                                <div className="card-body">
                                    <div className={"row"}>
                                        <div className={"col-sm-3"}>

                                            <h5 className="card-title">{project.name}</h5>
                                            <a href={project.url}
                                               className="btn btn-success">{intl.formatMessage({id: 'view'})}</a>
                                        </div>
                                        <div className={"col-sm-9"}>
                                            <p className="card-text">
                                                {project.description}
                                            </p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

Projects.propTypes = {};
Projects.defaultProps = {
    projects,
};

export default injectIntl(Projects);
