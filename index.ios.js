/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import { Provider } from 'react-redux'
import store from './src/store'
import MainNavigation from './src/navigation'
import './ReactotronConfig'
export default class newsystem extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('newsystem', () => newsystem);
