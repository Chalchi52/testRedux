import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';

import reducers from './redux/reducers/index';
import Welcome from './redux/screens/welcome';

const store = createStore(reducers, applyMiddleware(thunk));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Welcome/>
      </Provider>
    );
  }
}