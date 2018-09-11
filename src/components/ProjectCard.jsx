import React from 'react';
import PropTypes from 'prop-types';
import {injectIntl} from 'react-intl';
import logo_etc from '../image/logo-etc.png';
import logo_clo from '../image/logo-clo.svg';

const logos = {
    logo_etc,
    logo_clo,
};

function mapToLogo(avatar) {

    return logos[avatar];
}

function ProjectCard({project, intl}) {
    return (
        <div className="col-xs-10 mx-auto card my-4">
            <div className="card-body">
                <div className={"row"}>
                    <div className={"col-md-4"}>
                        <h4 className={'row flex justify-content-center align-items-center'}>
                            <img
                                width={"36px"}
                                height={"auto"}
                                className={'rounded-circle'}
                                src={mapToLogo(project.avatar) || 'http://gkoonz.com/wp-content/uploads/2013/02/placeholder.jpg'}
                                alt={""}
                            />
                            <span className={'pl-3'}>
                                                {project.name}
                                            </span>
                        </h4>

                        <div className={'row flex justify-content-center align-items-center'}>
                            <a href={project.url}
                               target={"_blank"}
                               rel={"noopener noreferrer"}
                               className="btn btn-success">{intl.formatMessage({id: 'view'})}</a>
                        </div>

                        <div className={'row flex justify-content-center align-items-center'}>
                            {project.socialNetworks.map((network, index) => {
                                return (
                                    <a
                                        key={`${network.url}_${network.prefix}_${index}`}
                                        target={'_blank'}
                                        rel={'noopener noreferrer'}
                                        href={network.url}>
                                        <i className={network.prefix + ' text-grey'}>
                                        </i>
                                    </a>
                                )
                            })}
                        </div>


                    </div>
                    <div className={"col-md-8"}>
                        <p className="card-text">
                            {intl.formatMessage({id: project.name + '.description'})}
                        </p>
                    </div>

                </div>
            </div>

        </div>
    );
}

ProjectCard.propTypes = {};
ProjectCard.defaultProps = {};

export default injectIntl(ProjectCard);
