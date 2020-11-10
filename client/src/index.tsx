import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { initI18Next } from './i18n';
import {App} from './pages/app/app';
import * as serviceWorker from './serviceWorker';
import * as loglevel from 'loglevel';

/** initialize i18n */
initI18Next()
  .catch((error) => {
    loglevel.error('Error in loading i18n', error);
  });

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
