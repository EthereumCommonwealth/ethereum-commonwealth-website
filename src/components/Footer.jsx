import React from 'react';

import "./Footer.css";
import {injectIntl} from 'react-intl';

import contact from '../team.contact.json';

function Footer({intl}) {

    return (
        <footer className={'bg-dark text-white py-3'}>

            <div className={"row"}>
                <div className={"col-sm-3"}>
                    <h3>
                        {contact.name}
                    </h3>

                </div>
                <div className={"col-sm-9"}>
                    <nav>
                        <ul className={'nav nav-list'}>
                            <li className={'list-item'}>
                                <a

                                    href={contact.homepage} target={'_blank'} rel={"noopener"}>
                                    <i className={'fab fa-github'}>

                                    </i>
                                </a>
                            </li>
                            <li>
                                <a href={'#'}>
                                    <i className={'fab fa-twitter'}>

                                    </i>
                                </a>
                            </li>
                            <li>
                                <a>
                                    telegram
                                </a>
                            </li>
                            <li>
                                <a>discord</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default injectIntl(Footer);
