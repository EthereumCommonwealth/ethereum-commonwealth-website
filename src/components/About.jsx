'use strict';

import {en as translations} from "../translations/en";
import {injectIntl} from 'react-intl';
import './About.css';

var React = require('react');
var PropTypes = require('prop-types');


function About({intl}) {
    return (

        <section id={"about"} className={'container'}>
            <h2 className={'text-capitalize'}>{intl.formatMessage({id: 'about'})}</h2>
            <p>
                {intl.formatMessage({id: 'about.p1'})}
            </p>
            <p>
                {intl.formatMessage({id: 'about.p2'})}
            </p>

            <p>
                <b>Ethereum Commonwealth</b>
                {intl.formatMessage({id: 'about.p3'})}
            </p>

            <p>{intl.formatMessage({id: "about.goal.heading"})}
            </p>

            <ol>
                <li>
                    {intl.formatMessage({id: 'about.goal.1'})}
                </li>
                <li>
                    {intl.formatMessage({id: 'about.goal.2'})}
                </li>
            </ol>
        </section>
    );
}

About.propTypes = {};
About.defaultProps = {};

export default injectIntl(About);
