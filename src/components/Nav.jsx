import React from 'react';
import {injectIntl} from 'react-intl';
import './Nav.css';

import contact from '../team.contact.json';


function Nav({intl}) {
    return (
        <nav className="navbar navbar-expand-sm bg-dark text-white fixed-top" id={"mainNav"}>
            <a className="navbar-brand" href={contact.homepage}>
                <img src={"https://avatars1.githubusercontent.com/u/31843178?s=200&v=4"}
                     width={"36"}
                     height={"auto"}
                />
            </a>
            <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
            >
                <i className={"fas fa-bars text-white"}>

                </i>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav d-flex justify-content-end align-items-center" style={{width: '100%'}}>

                    <li className={"nav-item p-3"}>
                        <a className={'text-capitalize text-grey'} href={"#about"}>
                            {intl.formatMessage({id: 'about'})}
                        </a>

                    </li>
                    <li className={"nav-item p-3"}>
                        <a className={'text-capitalize'} href={"#projects"}>

                            {intl.formatMessage({id: 'projects'})}
                        </a>

                    </li>
                    <li className={"nav-item p-3"}>
                        <a className={'text-capitalize'} href={"#team"}>
                            {intl.formatMessage({id: 'team'})}
                        </a>

                    </li>
                    <li className={'nav-item p-3 text-primary'}>
                        <a href={"https://github.com/ethereumcommonwealth"}>
                            <i className={"navbar-link fab fa-github text-primary"}>

                            </i>
                        </a>
                    </li>

                </ul>

            </div>
        </nav>
    )
}


export default injectIntl(Nav);
