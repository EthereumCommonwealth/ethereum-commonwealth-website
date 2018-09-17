import React from 'react';

import './Footer.css';
import { injectIntl } from 'react-intl';

import contact from '../team.contact.json';

function Footer({ intl }) {
  return (
    <footer className="bg-secondary text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h2>
              {contact.name}
            </h2>

          </div>
          <div className="col-md-9">
            <nav className="row d-flex justify-content-end align-items-center">
              <ul className="nav nav-list">
                <li className="list-item px-4">
                  <a

                    className=""
                    href={contact.homepage}
                    target="_blank"
                    rel="noopener"
                  >

                                        github
                  </a>
                </li>
                <li className="list-item px-4">
                  <a
                    className=""
                    href="#"
                  >
                                        twitter

                  </a>
                </li>
                <li className="list-item px-4">
                  <a className="" href="#">
                                        telegram

                  </a>
                </li>
                <li className="list-item px-4">
                  <a className="" href="#">
                                        discord

                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="row">
                    ©2018
          {' '}
          {contact.name}
        </div>
      </div>
    </footer>
  );
}

export default injectIntl(Footer);
