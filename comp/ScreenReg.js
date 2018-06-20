import React, { Component } from 'react';
import { View,
  StyleSheet,
  Image,
  ScrollView,
  Text,
  FlatLis,
  ImageBackground,
  Alert,
  TouchableOpacity,
  AsyncStorage} from 'react-native';


import { Container, Header, Content, Left, Body, Title ,Card, CardItem, Input, Item, Label, Form} from 'native-base'; // 2.3.6
import { Col, Row, Grid } from "react-native-easy-grid";
import Button from 'react-native-button';
import 'react';
import {Svg, Path, G, ClipPath} from 'react-native-svg';


import PropTypes from 'prop-types';
import * as firebase from 'firebase';
import md5 from "react-native-md5";


export default class ScreenReg extends Component {

  static navigationOptions = {
          header: null
      }

  constructor(props) {
     super(props);
     this.state = {
       fio: '',
       email: '',
       password: '',
       replaypassword: '',
       promo: '',
     }

     AsyncStorage.getItem('USER', (err, result) => {
         console.log(JSON.parse(result)['fio']);
       });

      //  let UID123_delta = {
      //   token: '123DDD',
      // };
      //
      // AsyncStorage.mergeItem('USER', JSON.stringify(UID123_delta), () => {
      //   AsyncStorage.getItem('USER', (err, result) => {
      //       console.log(JSON.parse(result)['token']);
      //     });
      // });

   }
   

  _handlePress() {

    if(this.state.fio == '') {
      Alert.alert(
          "Ошибка ввода",'Введите ФИО!'
       );
       return;
    }

    if(this.state.email.indexOf('@') == -1 || this.state.email.indexOf('.') == -1 || this.state.email.length < 6) {
      Alert.alert(
          "Ошибка ввода",'Некорректный e-mail!'
       );
       return;
    }

    if(this.state.password.length  < 6) {
      Alert.alert(
          "Ошибка ввода",'Пароль должен быть более 6-ти символов!'
       );
       return;
    }
    if(this.state.replaypassword.length  < 6) {
      Alert.alert(
          "Ошибка ввода",'Пароль должен быть более 6-ти символов!'
       );
       return;
    }

    if(this.state.password.indexOf(this.state.replaypassword) == -1) {
      Alert.alert(
          "Ошибка ввода",'Пароли не совпадают!'
       );
       return;
    }

    let pass_md = md5.str_md5(this.state.password);

    try{
      firebase.auth().createUserWithEmailAndPassword(this.state.email, pass_md);
      console.log ('reg true');
      let USER = {
        fio: this.state.fio,
        email: this.state.email,
        password: pass_md,
        promo:this.state.promo ,
      };

      AsyncStorage.setItem('USER', JSON.stringify(USER), () => {
        console.log('add to DB');
      });

      AsyncStorage.getItem('USER', (err, result) => {
          console.log(result);
        });

      this.props.navigation.navigate('ScreenLogin');

    }catch (error) {
      console.log (error.toString());
      Alert.alert(
          error.toString()
       )
    }
   };
   _handlePressHome() {
     this.props.navigation.navigate('ScreenLogin');
    };

  render() {

    return (
    <View style = {{backgroundColor: '#FFF', flex : 1, }}>
    <ScrollView style = {{backgroundColor: '#FFF', }}>

      <View style = {styles.header}>
        <View style ={{justifyContent: 'center',}}>
        <TouchableOpacity onPress={() => this._handlePressHome()} >
          <Image style={styles.home} source={require('../img/home.png')}/>
        </TouchableOpacity>
        </View>

        <View style ={{flex :1, alignItems: 'center', justifyContent: 'center',}}>
            <Text style = {styles.headerText}> Регистрация </Text>
        </View>

        <View>



        </View>

      </View>

    <Form >

      <Item floatingLabel style = {{ marginTop : 10, marginRight : 16, }}>
        <Label style = {{ color : '#000',}} >ФИО</Label>
        <Input style = {{ color : '#000',}} onChangeText={ (text) => this.setState({ fio: text }) }></Input>
      </Item>

      <Item floatingLabel style = {{marginRight : 16, }}>
        <Label style = {{ color : '#000',}} >E-mail</Label>
        <Input style = {{ color : '#000',}} onChangeText={ (text) => this.setState({ email: text }) }></Input>
      </Item>

      <Item floatingLabel style = {{marginRight : 16,}}>
        <Label style = {{ color : '#000',}} >Пароль</Label>
          <Input style = {{ color : '#000',}} secureTextEntry onChangeText={ (text) => this.setState({ password: text }) }></Input>
      </Item>
      <Item floatingLabel style = {{marginRight : 16,}}>
        <Label style = {{ color : '#000',}} >Повторите пароль</Label>
          <Input style = {{ color : '#000',}} secureTextEntry onChangeText={ (text) => this.setState({ replaypassword: text }) }></Input>
      </Item>

      <Item floatingLabel style = {{marginRight : 16, }}>
        <Label style = {{ color : '#000',}} >Введите промо-код</Label>
        <Input style = {{ color : '#000',}} onChangeText={ (text) => this.setState({ promo: text }) }></Input>
      </Item>

      <Button
        onPress={() => this._handlePress()}
        containerStyle={{marginTop : 35,padding:10, height:40, width : 250 ,overflow:'hidden', borderRadius:4, backgroundColor: '#FFDC26'}}
        disabledContainerStyle={{backgroundColor: 'white'}}
        style={{fontSize: 14, color: '#A965C9'}}>
        Готово
      </Button>
    </Form>
    </ScrollView>

    </View>
    );
  }
}


const styles = StyleSheet.create({
home : {
    width: 25,
    height: 25,
    marginLeft : 8,
  },
headerText : {

  color : 'white',
  fontSize : 18,

},

header : {
  flex :1,
  flexDirection: 'row',
  height : 48,
  backgroundColor: '#4C0A6B',
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
