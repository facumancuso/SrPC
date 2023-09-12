import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './redux/store/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from './initializers/firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
   </Provider>
);