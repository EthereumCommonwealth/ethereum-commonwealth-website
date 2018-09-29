import React from 'react';
import PropTypes from 'prop-types';
import {injectIntl} from 'react-intl';
import {name} from '../team.contact';
import './Masthead.css';

import bg0 from '../image/bg0.svg';
import bg1 from '../image/bg1.svg';
import bg2 from '../image/bg2.svg';
import Nav from "./Nav";


function getStars() {

    const arr = [];

    function rand(min = 0, max = 100) {

        return Math.floor(Math.random() * ((max - min + 1) + min));
    }


    const size = '3px';
    const width = size;
    const height = size;

    const stars = [
        {width, height, top: '10%', left: '20%'},
        {width, height, top: '10%', left: '50%'},
        {width, height, top: '60%', left: '60%'},
        {width, height, top: '70%', left: '40%'},
        {width: '4px', height: '4px', top: '70%', left: '30%'},
        {width: '4px', height: '4px', top: '15%', left: '30%'},
        {width: '6px', height: '6px', top: '80%', left: '15%'},
        {width: '6px', height: '6px', top: '75%', left: '40%'},
        {width: '6px', height: '6px', top: '77%', left: '60%'},
        {width: '6px', height: '6px', top: '30%', left: '50%'},
        {width: '6px', height: '6px', top: '40%', left: '70%'},
        {width: '6px', height: '6px', top: '30%', left: '75%'},
        {width: '6px', height: '6px', top: '20%', left: '65%'},
    ];
    arr.push(stars.map(item => <div className={'star'} style={item}></div>));




    return arr;
}

function Masthead({intl}) {
    const [ethereum, commonwealth] = name.split(' ');
    return (
        <section className="container-fluid bg-dark text-white masthead">
            <Nav/>
            <div className={'row'}>
                <div className={'col-md-8'}>
                    <div className={'name-container'}>
                        <h1>
                            <span className="text-primary bg-info p-3 pl-4 rounded">{ethereum}</span>
                            <span className="text-white commonwealth pl-4">{commonwealth}</span>
                        </h1>
                        <p className="pl-4">
                            {' '}
                            {intl.formatMessage({id: 'goal'})}
                        </p>
                    </div>

                </div>
            </div>

            <img src={bg0} className={'bg0 d-none d-md-inline-block'}/>
            <img src={bg1} className={'bg1 d-none d-md-inline-block'}/>
            <img src={bg2} className={'bg2 d-none d-md-inline-block'}/>

            {getStars()}
        </section>
    );
}

Masthead.propTypes = {
    intl: PropTypes.object.isRequired,
};
Masthead.defaultProps = {};

export default injectIntl(Masthead);
