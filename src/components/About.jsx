'use strict';

import {en as translations} from "../translations/en";
import {injectIntl} from 'react-intl';

var React = require('react');
var PropTypes = require('prop-types');


function About({intl}) {
    return (

        <section id={"about"}>
            <h3>{intl.formatMessage({id: 'about'})}</h3>
            {intl.formatMessage({id: 'welcome'})}
            <br/>
            {intl.formatMessage({id: 'About'})}
        </section>
    );
}

About.propTypes = {};
About.defaultProps = {};

export default injectIntl(About);
