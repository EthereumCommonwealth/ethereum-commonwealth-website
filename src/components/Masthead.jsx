'use strict';

import {injectIntl} from 'react-intl';
import {name} from '../team.contact';
import './Masthead.css';


var React = require('react');
var PropTypes = require('prop-types');

function Masthead({intl}) {

    const [ethereum, commonwealth] = name.split(" ");
    return (
        <section style={{height: '80vh'}} className={'container-fluid bg-dark text-white masthead'}>
            <h1>
                <span className={"text-primary bg-info"}>{ethereum}</span>
                <br/>
                <span className={"text-white"}>{commonwealth}</span>
            </h1>
            <p> {intl.formatMessage({id: 'goal'})}</p>
        </section>
    );
}

Masthead.propTypes = {};
Masthead.defaultProps = {};

export default injectIntl(Masthead);
