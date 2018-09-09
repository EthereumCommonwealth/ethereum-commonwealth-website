'use strict';

import {injectIntl} from 'react-intl';
import {name} from '../team.contact';

var React = require('react');
var PropTypes = require('prop-types');

function Welcome({intl}) {

    const [ethereum, commonwealth] = name.split(" ");
    return (
        <section style={{height: '80vh'}} className={'bg-dark text-white'}>
            <h1>
                <span className={"text-primary bg-info"}>{ethereum}</span>
                <br/>
                <span className={"text-white"}>{commonwealth}</span>
            </h1>
            <p> {intl.formatMessage({id: 'goal'})}</p>
        </section>
    );
}

Welcome.propTypes = {};
Welcome.defaultProps = {};

export default injectIntl(Welcome);
