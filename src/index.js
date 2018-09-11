import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/js/bootstrap.min";
import {smoothScroll, shrinkNavbarShowScrollTopButton} from './customCss';

import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './index.css';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();

smoothScroll();
shrinkNavbarShowScrollTopButton();
