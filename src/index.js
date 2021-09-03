import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import reducers from './Redux/Reducers';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
/* eslint-disable no-underscore-dangle */
const store = createStore(reducers, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-7phcck-h.us.auth0.com"
      clientId="dccJnkThj8jriP1YJDm11PINSN3n6TIw"
      redirectUri={window.location.origin}
      audience="https://tracker-api/"
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
