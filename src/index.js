import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import $ from 'jquery/dist/jquery.min';
// import 'popper.js/dist/popper.min';
import "bootstrap/dist/js/bootstrap.min";


import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App/>, document.getElementById('root'));

// registerServiceWorker();


$(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
    } else {
        $("#mainNav").removeClass("navbar-shrink");
    }
});

