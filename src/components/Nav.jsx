import React from 'react';
import {injectIntl} from 'react-intl';


function Nav({intl}) {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-dark">
            <a className="navbar-brand" href="#">
                <img src={"https://avatars1.githubusercontent.com/u/31843178?s=200&v=4"}/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">

                </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto pull-right">

                    <li className={"nav-item"}>
                        <a className={'js-scroll-trigger'} href={"#about"}>
                            {intl.formatMessage({id: 'about'})}
                        </a>

                    </li>
                    <li className={"nav-item"}>
                        <a className={'js-scroll-trigger'} href={"#projects"}>

                            {intl.formatMessage({id: 'projects'})}
                        </a>

                    </li>
                    <li className={"nav-item"}>
                        <a className={'js-scroll-trigger'} href={"#team"}>
                            {intl.formatMessage({id: 'team'})}
                        </a>

                    </li>
                    <li>
                        <a href={"https://github.com/ethereumcommonwealth"}>
                            <i className={"fab fa-github"}></i>
                        </a>
                    </li>

                </ul>

            </div>
        </nav>
    )
}


export default injectIntl(Nav);
