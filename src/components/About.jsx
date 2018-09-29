import React from 'react';
import PropTypes from 'prop-types';
import {injectIntl} from 'react-intl';
import './About.css';

import union from '../image/Union.svg';

function About({intl}) {
    return (

        <section id="about" className="container">
            <h2 className={'pl-5'}>
                {intl.formatMessage({id: 'about'})}
                <img src={union} width={'15px'} height={'15px'}/>
            </h2>
            <hr className="bg-secondary"/>
            <div className="row justify-content-center my-3">
                <div className="col-md-10 col-lg-9 offset-md-2 offset-lg-3">
                    <p>
                        {intl.formatMessage({id: 'about.p1'})}
                    </p>


                    <p>
                        {intl.formatMessage({id: 'about.goal.heading'})}
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
