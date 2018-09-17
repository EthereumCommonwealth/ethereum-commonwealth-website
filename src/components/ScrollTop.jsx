import React from 'react';
import PropTypes from 'prop-types';

function ScrollTop() {
  return (
    <div className="scroll-top" id="scrollTop">
      <a
        href="#page-top"
        className="btn btn-primary d-lg-none d-flex justify-content-center align-items-center"
      >
        <i className="fas fa-arrow-up" />
      </a>
    </div>
  );
}

ScrollTop.propTypes = {};
ScrollTop.defaultProps = {};

export default ScrollTop;
