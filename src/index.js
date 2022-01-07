import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import 'semantic-ui-css/semantic.min.css'
import {Provider} from 'react-redux';
import {store} from './store';
import './index.css';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>

    <App />

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);