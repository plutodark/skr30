import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
// import 'core-js/es/map';
// import 'core-js/es/set';
// import 'core-js/es/string';
// import 'raf/polyfill';
import React from 'react';
import { render } from 'react-snapshot';
import { Provider } from 'react-redux';
import  {
  BrowserRouter as Router,
} from 'react-router-dom';
import store from './store';
import './main.scss';
import App from './pages/App';
import * as serviceWorker from './serviceWorker';

const renderedApp = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
const rootElement = document.getElementById('app');
render(renderedApp, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
