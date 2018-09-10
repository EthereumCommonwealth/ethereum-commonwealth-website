import React from 'react';
import PropTypes from 'prop-types';
import {injectIntl} from 'react-intl';
import projects from '../projects.json';

import './Projects.css';

function Projects({projects, intl}) {
    return (
        <section id={"projects"} className={'bg-light'}>
            <div className={'container py-3'}>
                <h2 className={'text-capitalize'}>{intl.formatMessage({id: 'projects'})}</h2>
                {projects.map((project, index) => {

                    return (
                        <div
                            key={project.name + index}
                            className="col-lg-10 mx-auto card my-3">
                            <div className="card-body">
                                <div className={"row"}>
                                    <div className={"col-sm-4"}>
                                        <h4 className={'row flex justify-content-center align-items-center'}>
                                            <img
                                                width={"36px"}
                                                height={"auto"}
                                                className={'rounded-circle'}
                                                src={'http://gkoonz.com/wp-content/uploads/2013/02/placeholder.jpg'}
                                                alt={""}
                                            />
                                            <span className={'pl-3'}>
                                                {project.name}
                                            </span>
                                        </h4>

                                        <div className={'row flex justify-content-center align-items-center'}>
                                            <a href={project.url}
                                               className="btn btn-success">{intl.formatMessage({id: 'view'})}</a>
                                        </div>

                                        <div className={'row flex justify-content-center align-items-center'}>
                                            {project.socialNetworks.map(network => {
                                                return (
                                                    <a href={network.url}>
                                                        <i className={network.prefix + ' text-grey'}>
                                                        </i>
                                                    </a>
                                                )
                                            })}
                                        </div>


                                    </div>
                                    <div className={"col-sm-8"}>
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
