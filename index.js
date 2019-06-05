/* eslint-disable react/react-in-jsx-scope */
/**
 * @format
 */
import * as React from 'react'
import { AppRegistry } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { name as appName } from './app.json'
import reducers from './src/reducers'
import AppNavigator from './src/components/navigation/AppNavigator'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(reducers)
const AppContainer = () => (
    <Provider store={store}>
        <AppNavigator /> 
    </Provider>
)

AppRegistry.registerComponent(appName, () => AppContainer)
