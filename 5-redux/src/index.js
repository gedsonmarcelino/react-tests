import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Set provider and Store to REDUX
import { Provider } from 'react-redux';
import { Store } from './store/index';

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
