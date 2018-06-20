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
// import ClientCard from './components/ClientCard.js';
// import TabCatalog from './components/Tabs/TabCatalog.js';
// import ClientQRScreen from './components/ClientQRScreen.js';
// import TabFavorites from '/media/flake/28E4941CE493E9F8/Web/React Project/Test5/components/Tabs/TabFavorites.js';



// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class App extends React.Component {
  render() {
    return (
        // <RegistrationForm></RegistrationForm>
        // <LoginForm></LoginForm>
        <AppNavigator></AppNavigator>
        // <VerifyPhone></VerifyPhone>
      //<ClientCard/>
	     //<ClientQRScreen/>
	  // <TabCatalog/>
    );
  }
}

const AppNavigator = StackNavigator({

  LoginForm : { screen : LoginForm},
  RegistrationForm : { screen : RegistrationForm},
  MainCLientScreen : { screen : MainClientScreen },
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
