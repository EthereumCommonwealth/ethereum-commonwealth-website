import React from 'react';
import PropTypes from 'prop-types';
import {injectIntl} from 'react-intl';
import './About.css';
import e1 from '../image/Ellipse 2.1.png';
import e2 from '../image/Ellipse 2.2.png';
import e3 from '../image/Ellipse 2.3.png';
import e4 from '../image/Ellipse 2.4.png';
import e5 from '../image/Ellipse 2.5.svg';
import line from '../image/ellipse-line.svg';

import union from '../image/Union.svg';
import contact from '../team.contact';

function getDots() {

    const arr = [];
    for (let i = 0; i < 6; i ++) {

        arr.push(
        <div className={`star star-about star-about-${i}`}></div>,

        )

    }

    return arr;
}

function About({intl}) {
    return (

        <section id="about" className="container">
            <h2 className={'pl-5'}>
                {intl.formatMessage({id: 'about'})}
                <img src={union} width={'15px'} height={'15px'}/>
            </h2>
            <hr className="bg-secondary"/>
            <div className="row d-flex align-items-center justify-content-center my-3">
                <div className="col-md-8 pl-5">
                    <p>
                        <b>{contact.name}{' '}</b>
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
                <div className={'d-none d-lg-flex pl-1 justify-content-center align-items-center col-lg-4'}>
                    {getDots()}
                    <img src={e4} className={'px-1'}/>
                    <img src={e1} className={'px-1'}/>
                    <img src={e2} className={'px-1'}/>
                    <img src={e1} className={'px-1'}/>
                    <img src={e4} className={'px-1'}/>
                    <img src={line} className={'about-line'} width={'95%'}/>
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
