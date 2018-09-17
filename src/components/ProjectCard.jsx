import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import logo_etc from '../image/logo-etc.png';
import logo_clo from '../image/logo-clo.svg';
import web from '../image/web.svg';

const logos = {
  logo_etc,
  logo_clo,
  web,
};

function mapToLogo(avatar) {
  return logos[avatar] || 'http://gkoonz.com/wp-content/uploads/2013/02/placeholder.jpg';
}


function ProjectCard({ project, intl }) {
  return (
    <div className="card shadow w-100 my-3">
      <div className="card-body">
        <div className="row p-2">
          <div className="col-md-4">
            <h4 className="row flex justify-content-center align-items-center">
              <img
                width="36px"
                height="auto"
                className="rounded-circle"
                src={mapToLogo(project.avatar)}
                alt=""
              />
              <span className="pl-3">{project.name}</span>
            </h4>

            <div className="row flex justify-content-center align-items-center my-2">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success"
              >
                {intl.formatMessage({ id: 'view' })}
              </a>
            </div>

            <div className="row flex justify-content-center align-items-center my-2">
              {project.socialNetworks.length > 0 && project.socialNetworks.map((network, index) => (
                <a
                  key={`${network.url}_${network.prefix}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={network.url}
                >
                  <i className={`${network.prefix} text-grey`} />
                </a>
              ))}
            </div>


          </div>
          <div className="col-md-8">
            <p className="card-text">
              {intl.formatMessage({ id: `${project.name}.description` })}
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
    socialNetworks: PropTypes.shape({
      url: PropTypes.string,
      prefix: PropTypes.string,
    }),
  }),
};
ProjectCard.defaultProps = {
  project: {},
};

export default injectIntl(ProjectCard);
