import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
<Auth0Provider domain="dev-3y13wdvq.us.auth0.com" clientId="TwNl5vQUkH4yff26vZCePPvpqrUKdVlV" redirectUri="http://localhost:3000">
  <App />
</Auth0Provider>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();