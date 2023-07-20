import React from 'react';
import ReactDOM from 'react-dom/client';
import "react-datepicker/dist/react-datepicker.css";
import './scss/reset.scss';
import './scss/grid.scss'
import './scss/radio-checkbox-switch.scss'
import './index.scss';

import { store } from './app/store';
import { Provider } from 'react-redux';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} noopCheck="always">
      <App />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
