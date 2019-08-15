import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);


serviceWorker.unregister();
