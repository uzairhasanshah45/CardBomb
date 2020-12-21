import React, {Component} from 'react';
import _ from 'lodash';
import SplashScreen from 'react-native-splash-screen';

import MainApp from './Navigation/index';
import {Provider} from 'react-redux';
import Store from './redux';
export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <Provider store={Store}>
        <MainApp />
      </Provider>
    );
  }
}
