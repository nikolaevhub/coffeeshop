import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './config/theme'
import {Provider} from "react-redux";
import store, {persistor} from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <App/>
                </ThemeProvider>
                    </PersistGate>
            </Provider>
        </BrowserRouter>
,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
