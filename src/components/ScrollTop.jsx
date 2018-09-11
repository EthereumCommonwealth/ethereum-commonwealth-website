import React from 'react';
import PropTypes from 'prop-types';

function ScrollTop(props) {
    return (
        <div className={'scroll-top'} id={'scrollTop'}>
            <a href={"#page-top"} className={'btn btn-primary d-lg-none'}>
                <i className={'fas fa-arrow-up'}>
                </i>
            </a>
        </div>
    );
}

ScrollTop.propTypes = {};
ScrollTop.defaultProps = {};

export default ScrollTop;
