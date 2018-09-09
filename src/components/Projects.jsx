'use strict';

import {injectIntl} from 'react-intl';
import projects from '../projects.json';

var React = require('react');
var PropTypes = require('prop-types');


function Projects({projects, intl}) {
    return (
        <section id={"projects"} className={'bg-secondary'}>
            <div className={'container py-3'}>
                <h3 className={'text-capitalize'}>{intl.formatMessage({id: 'projects'})}</h3>
                <div className={"row"}>
                    {projects.map((project, index) => {

                        return (
                            <div
                                key={project.name + index}
                                className="col-lg-8 mx-auto card my-3">
                                <div className="card-body">
                                    <div className={"row"}>
                                        <div className={"col-sm-3"}>

                                            <h5 className="card-title text-center">{project.name}</h5>

                                            <div className={"row mx-auto"}>
                                                <img
                                                    width={"36px"}
                                                    height={"auto"}
                                                    src={project.avatar}
                                                    alt={""}
                                                />
                                            </div>
                                            <div className={"row mx-auto text-center"}>
                                                <a href={project.url}
                                                   className="btn btn-success">{intl.formatMessage({id: 'view'})}</a>
                                            </div>
                                        </div>
                                        <div className={"col-sm-9"}>
                                            <p className="card-text">
                                                {intl.formatMessage({id: project.name + '.description'})}
                                            </p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

Projects.propTypes = {};
Projects.defaultProps = {
    projects,
};

export default injectIntl(Projects);