import React from 'react';
import ReactDOM from 'react-dom';
// import './reset.css';
import './index.css';
import App from './App';

import {Provider} from 'react-redux';
import store from './ducks/store.js';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
