/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import LoginForm from './components/LoginForm.js';
import RegistrationForm from './components/RegistrationForm.js';
import ClientCard from './components/ClientCard.js';
import ClientQrScreen from './components/ClientQrScreen.js';


// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class App extends Component {
  render() {
    return (
      // <AppNavigator></AppNavigator>
      // <VerifyPhone></VerifyPhone>
      //<ClientCard/>
       // <TabCatalog/>
       <ClientQrScreen/>
    );
  }
}

const AppNavigator = StackNavigator({

  LoginForm : { screen : LoginForm},
  RegistrationForm : { screen : RegistrationForm},
  ClientCard : { screen : ClientCard },
});

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
