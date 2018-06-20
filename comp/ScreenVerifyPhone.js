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


export default class ScreenVerifyPhone extends Component {

  static navigationOptions = {
          header: null
      }

  constructor(props) {
     super(props);
     this.state = {
       phone: '',
     }


   }

  _handlePress() {

      if(this.state.phone.length < 7 ) {

        Alert.alert(
            "Ошибка ввода",'Некорректный номер!'
         );
         return;

      }
      this.props.navigation.navigate('ScreenMain');

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
            <Text style = {styles.headerText}> Подтверждение телефона </Text>
        </View>

        <View>



        </View>

      </View>

      <View style = {{padding : 16,}}>
          <Text style = {{flex: 1,alignItems: 'center', justifyContent: 'center', color : '#000', }}>Твой Магази отправит SMS-сообщение, чтобы подтвердить Ваш номер телефона. Введите номер телефона:</Text>

          <Label style = {{ color : '#000', marginTop : 16, }} >Введите номер</Label>

          <View style = {{flex :1, flexDirection: 'row', justifyContent: 'center',}}>
              <View style = {{justifyContent: 'center',}}>
                <Text style = {{ fontSize : 16,}}>+375</Text>
              </View>

              <View style = {{flex :1, flexDirection: 'column', marginTop : 1,}}>
               <Input style = {{ color : '#000',}} onChangeText={ (text) => this.setState({ phone: text }) }></Input>
              </View>

         </View>

         <View style = {{ height : 1, backgroundColor : '#C8C7CC',}}></View>

      </View>

    <Form style = {{flex: 1,alignItems: 'center', justifyContent: 'center',}}>
      <Button
        onPress={() => this._handlePress()}
        containerStyle={{marginTop : 35,padding:10, height:40, width : 250 ,overflow:'hidden', borderRadius:4, backgroundColor: '#FFDC26'}}
        disabledContainerStyle={{backgroundColor: 'white'}}
        style={{fontSize: 14, color: '#A965C9'}}>
        Отправить
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
