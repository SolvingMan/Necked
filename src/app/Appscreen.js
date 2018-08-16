import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator   } from 'react-navigation';
import  Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import Signup1 from '../Auth/Signup1';
import Forgotpass from '../Auth/Forgotpass';
import Appboard from '../Appboard';
import Validation from '../Auth/Validation';

const AppNavigator = StackNavigator ({
    LoginScreen: { screen: Login , navigationOptions : {header : null}},
    SignupScreen: { screen: Signup,  navigationOptions : {header : null}},
    Signup1Screen: { screen: Signup1,  navigationOptions : {header : null}},
    AppboardScreen: { screen: Appboard,  navigationOptions : {header : null}},
    ForgotpassScreen: { screen: Forgotpass, navigationOptions: {
        title: `Forgot Password`,
    }},
    ValidationScreen: { screen: Validation, navigationOptions: {
      title: `Verify your Email`,
  }},
},
// {
//     navigationOptions: {
//         header : null
// }
// }
);
// const AppNavigator1 = StackNavigator ({
//   LoginScreen: { screen: Login , navigationOptions : {header : null}},
//   AppboardSreen: { screen: Appboard,  navigationOptions : {header : null}},
// });

export default class Appscreen extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}