import React from 'react';
import PropTypes from 'prop-types';
import {injectIntl} from 'react-intl';
import './Nav.css';

import contact from '../team.contact.json';
import projects from '../projects';
import {smoothScroll} from '../smoothScroll';

const union = require('../image/Union.svg');


function Nav({intl}) {
    return (
        <nav className="navbar navbar-expand-sm bg-transparent text-white p-0 py-lg-1" id="mainNav">
            <a className="navbar-brand" href={contact.homepage}>

                <img
                    src={union}
                    alt={contact.name}
                    className={'brand-img'}
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
                <i className="fas fa-bars text-white"/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav d-flex justify-content-end align-items-center w-100">

                    <li className="nav-item p-3">
                        <a className="text-capitalize"
                           href={'#about'}
                           onClick={(e) => {
                               e.preventDefault();
                               smoothScroll('#about');
                           }}>
                            {intl.formatMessage({id: 'about'})}
                        </a>

                    </li>
                    <li className="nav-item p-3">
                        <a className="text-capitalize" onClick={() => smoothScroll('#projects')}>

                            {intl.formatMessage({id: 'projects'})}
                        </a>

                    </li>
                    <li className="nav-item p-3">
                        <a className="text-capitalize" onClick={() => smoothScroll('#team')}>
                            {intl.formatMessage({id: 'team'})}
                        </a>

                    </li>
                    <li className="nav-item p-3 text-primary">
                        <a href="https://github.com/ethereumcommonwealth">
                            <i className="fab fa-github text-primary"/>
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
