import React from 'react';
import PropTypes from 'prop-types';
import {injectIntl} from 'react-intl';
import {name} from '../team.contact';
import './Masthead.css';



function Masthead({intl}) {

    const [ethereum, commonwealth] = name.split(" ");
    return (
        <section style={{height: '100vh'}} className={'container-fluid bg-dark text-white masthead'}>
            <h1>
                <span className={"text-primary bg-info pl-4 pr-2 py-2"}>{ethereum}</span>
                <br/>
                <span className={"text-white my-1"}>{commonwealth}</span>
            </h1>
            <p> {intl.formatMessage({id: 'goal'})}</p>
        </section>
    );
}

Masthead.propTypes = {
    intl: PropTypes.object.isRequired,
};
Masthead.defaultProps = {};

export default injectIntl(Masthead);
