/**
 * @format
 */

import { AppRegistry } from 'react-native';
import Login from './src/screens/Login';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import React from "react";
import configureStore from "./src/store"
import App from "./App"
const store = configureStore()

const app = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => app);
