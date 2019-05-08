
import React, {Component} from 'react';
import {Platform,  Text, View} from 'react-native';
import createRootNavigator from "./src/navigations/rootNavigator"

const RootNavigator = createRootNavigator(true)
export default class App extends Component {
  render() {
    return (
      <RootNavigator/>
    );
  }
}

