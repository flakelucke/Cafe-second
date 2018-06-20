import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  ScrollView,
  Text,
  FlatLis,
  ImageBackground,
  Alert,
  TouchableOpacity,
  AsyncStorage} from 'react-native';


import {
  View,
  Container,
  Header,
  Content,
  Left,
  Body,
  Title ,
  Card,
  CardItem,
  Input,
  Item,
  Label,
  Form,
  Fab,
} from 'native-base'; // 2.3.6
import { Col, Row, Grid } from "react-native-easy-grid";
import Button from 'react-native-button';
import 'react';
import PropTypes from 'prop-types';
import Barcode from 'react-native-barcode-builder';
import * as firebase from 'firebase';


export default class ScreenQR extends Component {



  constructor(props) {
     super(props);
     this.state = {
       qr : 'shops123456',
       balls: '35',
       friends: '5',
       active: 'true',
     }
   }

  _handlePress() {

   };

   _handlePressHome() {

    };

  render() {

    return (
    <Container>
    <View style = {{backgroundColor: '#FFF', flex : 1, }}>

    <ImageBackground
      source={require('../img/bg_image.png')}
      style={{width: '100%', height: '100%',}}
      >

            <ScrollView>
              <View style = {styles.header}>
                <View style ={{flex :1, alignItems: 'center', justifyContent: 'center',}}>
                    <Text style = {styles.headerText}> Твой магазин </Text>
                </View>
              </View>

              <View style = {{ height : 50, backgroundColor: '#FFDC26', padding : 5,flex: 1, flexDirection: 'row', }}>

                  <View style = {{ flex : 0.5}}>
                    <Text style = { styles.textInf1}> У Вас {this.state.balls} баллов </Text>
                    <Text style = { styles.textInf1}> У Вас {this.state.friends} баллов </Text>
                  </View>

                  <View style = {{ flex : 0.5, alignItems: 'flex-end',}}>
                    <TouchableOpacity onPress={() => this._handlePressHome()} >
                      <Image style = {styles.user} source={require('../img/user.png')}/>
                    </TouchableOpacity>
                  </View>

              </View>


              <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center',}}>
                   <Text style = {{ fontSize : 36, color : '#FFF', marginTop : 8, }}>ТВОЙ МАГАЗИН</Text>
                   <Text style = {{ fontSize : 18, color : '#FFF'}}>ТОВАРЫ БОЛЬШОГО ГОРОДА</Text>
              </View>

              <View style = { styles.cardBarcode}>
                <Barcode value={this.state.qr} format="CODE128"/>
              </View>

              <View style ={{flex :1, alignItems: 'center', justifyContent: 'center',}}>
                <Text style = { styles.textID}>ID:     {this.state.qr}</Text>
                <Text style = { styles.textWhite}>Это ваш штрих-код.</Text>
                <Text style = { styles.textWhite}>Отсканируйте его у продавца, получите скидку или бонусные баллы.</Text>
              </View>

            </ScrollView>
      </ImageBackground>

    </View>
    </Container>
    );
  }
}


const styles = StyleSheet.create({
user : {
      width: 30,
      height: 30,
      marginRight : 8,
},

textWhite : {
  textAlign: 'center',
  color : '#FFF',
  fontSize : 18,
},

textID : {

  color : '#FFDC26',
  fontSize : 28,

},

cardBarcode :{
  padding : 10,
  margin : 20,
  borderRadius:8,
  borderWidth:1,
  borderColor: "#FFF",
  backgroundColor: '#FFF',

},
home : {
    width: 25,
    height: 25,
    marginLeft : 8,
  },
textInf1 : {

  fontSize : 16,
  color : '#541173',

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
