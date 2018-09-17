import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import './Nav.css';

import contact from '../team.contact.json';
import projects from '../projects';

function Nav({ intl }) {
  return (
    <nav className="navbar navbar-expand-sm bg-dark text-white" id="mainNav">
      <a className="navbar-brand pl-5" href={contact.homepage}>
        <img
          className="rounded-circle"
          src="https://avatars1.githubusercontent.com/u/31843178?s=200&v=4"
          width="50"
          height="50px"
          alt={contact.name}
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav d-flex justify-content-end align-items-center w-100">

          <li className="nav-item p-3">
            <a className="text-capitalize" href="#about">
              {intl.formatMessage({ id: 'about' })}
            </a>

          </li>
          <li className="nav-item p-3">
            <a className="text-capitalize" href="#projects">

              {intl.formatMessage({ id: 'projects' })}
            </a>

          </li>
          <li className="nav-item p-3">
            <a className="text-capitalize" href="#team">
              {intl.formatMessage({ id: 'team' })}
            </a>

          </li>
          <li className="nav-item p-3 text-primary">
            <a href="https://github.com/ethereumcommonwealth">
              <i className="fab fa-github text-primary" />
            </a>
          </li>

        </ul>

      </div>
    </nav>
  );
}


Nav.propTypes = {
  intl: PropTypes.object.isRequired,
};
Nav.defaultProps = {};

export default injectIntl(Nav);
