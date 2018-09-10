import React from 'react';

import "./Footer.css";
import {injectIntl} from 'react-intl';

import contact from '../team.contact.json';

function Footer({intl}) {

    return (
        <footer className={'bg-secondary text-white py-3'}>

            <div className={'container'}>
                <div className={"row"}>
                    <div className={"col-sm-3"}>
                        <h2>
                            {contact.name}
                        </h2>

                    </div>
                    <div className={"col-sm-9"}>
                        <nav className={'row justify-content-end align-items-center'}>
                            <ul className={'nav nav-list'}>
                                <li className={'list-item px-2'}>
                                    <a

                                        className={''}
                                        href={contact.homepage}
                                        target={'_blank'}
                                        rel={"noopener"}>
                                        <i className={'fab fa-github'}>

                                        </i>
                                        Github
                                    </a>
                                </li>
                                <li className={'list-item px-2'}>
                                    <a
                                        className={''}
                                        href={'#'}>
                                        <i className={'fab fa-twitter'} rel="noopener noreferrer">


                                        </i>
                                        Twitter
                                    </a>
                                </li>
                                <li className={'list-item px-2'}>
                                    <a className={''} href={"#"}>
                                        <i className={'fab fa-telegram'}>
                                        </i>
                                        Telegram
                                    </a>
                                </li>
                                <li className={'list-item px-2'}>
                                    <a className={''} href={"#"}>
                                        <i className={'fab fa-discord'}>
                                        </i>
                                        Discord
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className={'row'}>
                    2018 Ethereum Commonwealth
                </div>
            </div>
        </footer>
    )
}

export default injectIntl(Footer);
