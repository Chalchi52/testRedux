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
import thunk from 'redux-thunk';

import RosyReducers from './redux/reducers/index';
import AppTouchables from './components/app.touchables';

const store = createStore(
  RosyReducers,
  applyMiddleware(thunk),
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppTouchables/>
      </Provider>
    );
  }
}

export default App;
