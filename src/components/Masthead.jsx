'use strict';

import {injectIntl} from 'react-intl';
import {name} from '../team.contact';
import './Masthead.css';


var React = require('react');
var PropTypes = require('prop-types');

function Masthead({intl}) {

    const [ethereum, commonwealth] = name.split(" ");
    return (
        <section style={{height: '100vh'}} className={'container-fluid bg-dark text-white masthead'}>
            <h1>
                <span className={"text-primary bg-info my-2 p-2 py-lg-3 px-lg-4"}>{ethereum}</span>
                <br/>
                <span className={"text-white my-1"}>{commonwealth}</span>
            </h1>
            <p> {intl.formatMessage({id: 'goal'})}</p>
        </section>
    );
}

Masthead.propTypes = {};
Masthead.defaultProps = {};

export default injectIntl(Masthead);
