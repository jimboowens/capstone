import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers/index';
import reduxPromise from 'redux-promise';

const theStoreWithMiddleWare = applyMiddleware(reduxPromise)(createStore)(reducers);


ReactDOM.render(
    <Provider store={theStoreWithMiddleWare}>
        <App />
    </Provider>, 
    document.getElementById('root')
);


