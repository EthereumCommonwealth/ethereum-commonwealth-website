import React from 'react';
import PropTypes from 'prop-types';
import {injectIntl} from 'react-intl';
import './About.css';


function About({intl}) {
    return (

        <section id={"about"} className={'container'}>
            <h2 className={'text-capitalize'}>{intl.formatMessage({id: 'about'})}</h2>

            <div className={'row'}>
                <div className={'col-lg-6 offset-lg-3'}>
                    <p>
                        {intl.formatMessage({id: 'about.p1'})}
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
                    <p>
                        {intl.formatMessage({id: 'about.p2'})}
                    </p>
                </div>
            </div>
        </section>
    );
}

About.propTypes = {
    intl: PropTypes.object.isRequired,
};
About.defaultProps = {};

export default injectIntl(About);
