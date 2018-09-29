import React from 'react';

import './Footer.css';
import {injectIntl} from 'react-intl';

import contact from '../team.contact.json';
import union from '../image/Union.svg';


function Footer({intl}) {
    return (
        <footer className="text-white py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 d-flex align-items-center">
                        <img src={union} height={'96px'} width={'96px'}/>
                        <h2 className={'text-capitalize'}>
                            {contact.name}
                        </h2>




                    </div>

                    <div className="col-md-8">
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
                <div className="row small text-secondary" style={{paddingLeft: '96px'}}>
                    {'© 2018 '}
                    <span className={'text-capitalize'}>
                        {contact.name}
                    </span>
                </div>


            </div>
        </footer>
    );
}

export default injectIntl(Footer);
