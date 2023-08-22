import React from "react";
import ReactDOM from "react-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';

import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import App from "./App";
import "./index.css"
import reducers from './reducers'
const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <GoogleOAuthProvider clientId="152397716258-fpmi6khf8lsoj19rcqj1b956dq6tecme.apps.googleusercontent.com">


        <Provider store={store}>
            <App />
        </Provider>
    </GoogleOAuthProvider>
    , document.getElementById('root'));
