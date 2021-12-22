import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Amplify, { Auth} from 'aws-amplify';

Amplify.configure({
  Auth: {
    region: 'ap-southeast-1',
    userPoolId: 'ap-southeast-1_9VcpLmy3r',
    userPoolWebClientId: '3bmud6if8m667mdit7eum27htt',
    mandatorySignIn: true,
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

