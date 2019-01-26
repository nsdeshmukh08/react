import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AuthProvider } from './Utility/Context-Utility/AuthContext';
import { Provider } from "react-redux";
import promise from "redux-promise";
import { createStore, applyMiddleware } from "redux";
import reducers from './Reducers/index_Reducer'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);; 
ReactDOM.render(
    <AuthProvider> 
        <Provider store={createStoreWithMiddleware(reducers)}>
            <App />
        </Provider> 
    </AuthProvider>
   , 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
