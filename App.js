/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import TestyReducers from './reducers/index';
import TestComponent from './components/test.component';
import thunk from 'redux-thunk';
import {Provider} from "react-redux";

const store = createStore(
    TestyReducers,
    applyMiddleware(thunk),
);




export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <TestComponent/>
        </Provider>
    );
  }
}


