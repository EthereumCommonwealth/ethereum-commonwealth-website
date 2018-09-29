import React from 'react';
import PropTypes from 'prop-types';
import {smoothScroll} from "../smoothScroll";

function ScrollTop() {
  return (
    <div className="scroll-top" id="scrollTop">
      <a
        onClick={() => smoothScroll('#page-top')}
        className="btn btn-primary d-lg-none d-flex justify-content-center align-items-center text-white"
      >
        <i className="fas fa-arrow-up" />
      </a>
    </div>
  );
}

ScrollTop.propTypes = {};
ScrollTop.defaultProps = {};

export default ScrollTop;
