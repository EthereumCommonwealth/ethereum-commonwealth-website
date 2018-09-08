'use strict';

import {injectIntl} from 'react-intl';
var React = require('react');
var PropTypes = require('prop-types');

function Welcome({intl}) {
    return (
        <section style={{height: '80vh'}} className={'bg-dark text-white'}>
            <h1>
                <span className={"text-primary bg-info"}>Ethereum</span>
                <br/>
                <span className={"text-white"}>
                            Commonwealth
                        </span>
            </h1>
            <p> {intl.formatMessage({id: 'goal'})}</p>
        </section>
    );
}

Welcome.propTypes = {};
Welcome.defaultProps = {};

export default injectIntl(Welcome);
