import React from 'react';

import "./Footer.css";
import {injectIntl} from 'react-intl';

function Footer({intl}) {

    return (
        <div className={'bg-dark text-white'}>

            <div className={"row"}>
                <div className={"col-sm-3"}>
                    <h3>
                        Ethereum Commonwealth
                    </h3>

                </div>
                <div className={"col-sm-9"}>
                    <nav>
                        <ul>
                            <li>
                                <a>
                                    github
                                </a>
                            </li>
                            <li>
                                <a>twitter</a>
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
        </div>
    )
}

export default injectIntl(Footer);
