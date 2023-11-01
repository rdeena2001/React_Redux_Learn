import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider, useDispatch } from 'react-redux';
import { store } from './redux/store';
import ReduxApp from './redux/ReduxApp'

import { getUsers } from './redux/Features/userSlice';

// store.dispatch(getUsers())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  //App
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>

  // Redux App
  // <BrowserRouter>
  //  <React.StrictMode>
  //  <Provider store={store}>
  //   <ReduxApp />
  // </Provider>
  // </React.StrictMode>
  // </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
