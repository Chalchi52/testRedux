/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import GlobalReducer from './redux/reducers/global.reducer';
import LauncherView from './app/launcher.view'
import thunk from 'redux-thunk';

const store = createStore(
  GlobalReducer,
  applyMiddleware(thunk),
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <LauncherView/>
      </Provider>
    );
  }
}
