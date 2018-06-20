import React, { Component } from 'react';
import { View, StyleSheet, Image, ScrollView, Text, FlatList, ImageBackground, Alert, TouchableOpacity, AsyncStorage} from 'react-native';


import { Container, Header, Content, Left, Body, Title ,Card, CardItem, Input, Item, Label, Form} from 'native-base'; // 2.3.6
import { Col, Row, Grid } from "react-native-easy-grid";
import Button from 'react-native-button';
import 'react';
import {Svg, Path, G, ClipPath} from 'react-native-svg';
import DBUser from '../db/DBUser';

import PropTypes from 'prop-types';
import * as firebase from 'firebase';
import md5 from "react-native-md5";


const firebaseConfig = {
  apiKey: "AIzaSyAet4VmmuhViG6LgrAi7XAR0zzbccSUFPA",
      authDomain: "shops-db02f.firebaseapp.com",
      databaseURL: "https://shops-db02f.firebaseio.com",
      projectId: "shops-db02f",
      storageBucket: "",
      messagingSenderId: "790389803332"
};
firebase.initializeApp(firebaseConfig);

export default class ScreenLogin extends Component {

  static navigationOptions = {
        header: null
    }

  constructor(props) {
     super(props);
     this.state = {
       userName: '',
       password: ''
     }

   }


   async loginFacebook() {

     const {type, token} = await Facebook.logInWithReadPermissionsAsync
     ('566419977071650', { permissions: ['public_profile'] })

     if( type == 'success'){

        const credential = firebase.auth().FacebookAuthProvider.credential(token)
        firebase.auth().signInWithCredential(credential).catch((error) => {
          Alert.alert(
              error.toString()
           )
        })

     }
   }

  _handlePress(_userName, _userPassword) {
      try{
        let pass_md = md5.str_md5(_userPassword);
        firebase.auth().signInWithEmailAndPassword(_userName, pass_md).then( function (user) {

        let UID123_delta = {
           token: user.uid,
         };
      console.log (user.uid);

        AsyncStorage.mergeItem('USER', JSON.stringify(UID123_delta), () => {
          AsyncStorage.getItem('USER', (err, result) => {
               console.log(JSON.parse(result));
             });
         });

        })

      }catch (error) {
        console.log (error.toString());
        Alert.alert(
            error.toString()
         );
         return;
      }
        this.props.navigation.navigate('ScreenMain');
   };
  _handlePressReg() {
      console.log ('ScreenReg');
      this.props.navigation.navigate('ScreenReg');

   };
  _handlePressFacebook() {

  };
  _handlePressGoogle() {
       Alert.alert(
           'Click Google!'
        )
  };
  _handlePressTwitter() {
       Alert.alert(
           'Click Twitter!'
        )
  };

  render() {
    return (
    <View style = {styles.container}>
    <ImageBackground
      source={require('../img/bg_image.png')}
      style={{width: '100%', height: '100%'}}
    >
    <ScrollView>
    <Grid style = {styles.container}>
      <Row size={30} style ={{ alignItems: 'center', justifyContent: 'center',}}>
         <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center',}}>
              <Text style = {{ fontSize : 36, color : '#FFF', marginTop : 30, }}>ТВОЙ МАГАЗИН</Text>
              <Text style = {{ fontSize : 18, color : '#FFF'}}>ТОВАРЫ БОЛЬШОГО ГОРОДА</Text>

              <Form style = {styles.container}>

                <Item floatingLabel style = {{ marginTop : 50, marginRight : 16, }}>
                  <Label style = {{ color : '#fff',}} >Username</Label>
                  <Input style = {{ color : '#fff',}} onChangeText={ (text) => this.setState({ userName: text }) }></Input>
                </Item>

                <Item floatingLabel style = {{marginRight : 16,}}>
                  <Label style = {{ color : '#fff',}} >Password</Label>
                    <Input style = {{ color : '#fff',}} secureTextEntry onChangeText={ (text) => this.setState({ password: text }) }></Input>
                </Item>

                <Button
                  onPress={() => this._handlePress(this.state.userName, this.state.password)}
                  containerStyle={{marginTop : 25,padding:10, height:40, width : 250 ,overflow:'hidden', borderRadius:4, backgroundColor: '#FFDC26'}}
                  disabledContainerStyle={{backgroundColor: 'white'}}
                  style={{fontSize: 14, color: '#A965C9'}}>
                  Войти
                </Button>

                 <TouchableOpacity onPress={() => this._handlePressReg()}>
                  <Text style = {{ color : '#FFF', marginTop : 20,}}>Регистрация</Text>
                 </TouchableOpacity>

                <View style = {{ flex : 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 16,}}>

                <TouchableOpacity onPress={() => this.loginFacebook()}>
                  <Image style={styles.social} source={require('../img/facebook.png')}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this._handlePressGoogle()}>
                  <Image style={styles.social} source={require('../img/google.png')}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this._handlePressTwitter()}>
                  <Image style={styles.social} source={require('../img/twitter.png')}/>
                </TouchableOpacity>

                </View>

              </Form>
          </View>
      </Row>
      <Row size={30}>
          <View style = {styles.container}>


          </View>
      </Row>
      <Row size={30}>
        <View style = {styles.container}>


        </View>
      </Row>
    </Grid>
    </ScrollView>
    </ImageBackground>


    </View>
    );
  }
}




const styles = StyleSheet.create({

social : {
  width: 60,
  height: 60,
  margin: 8,

},

label : {
  color : '#FFF',
},

btn : {
  color: "#FFF",
},

editText : {
  marginLeft : 8,
  marginRight : 16,
  width:'85%',
},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width:null,
    height:null,
  },

});
