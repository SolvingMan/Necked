/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from './src/Auth/Login';
import Signup from './src/Auth/Signup';
import Signup1 from './src/Auth/Signup1';
// import TabNavigator from './src/Home';
// import { TabNavigator, TabBarBottom } from 'react-navigation';
import  Appscreen  from './src/app/Appscreen';
import Forgotpass from './src/Auth/Forgotpass';
import Appboard from './src/Appboard';
import Profile from './src/Profile/Profile';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
export let user_id; 
export function setUserID(userID) {
  user_id = userID;
}
export function getUserID() {
  return user_id;
}
// type Props = {};
export default class App extends Component {

  componentDidMount() {
    console.disableYellowBox = true;
  }

  render() {
    return (
     <Appscreen />
    // <Forgotpass />
    // <Appboard />
    // <Profile />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
