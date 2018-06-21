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

export default class TabQRClient extends Component {

  static navigationOptions = {
    title: 'Карта клиента' ,
    headerStyle: { height: 64 },
    headerTintColor: '#FFDC26',
    headerTitleStyle: {
      color: 'black',
      marginLeft: '20%',
      paddingRight: 10,
  },
}

	constructor(props) {
		super(props);
		this.state = {
		  qr : 'shops123456',
		  balls: '35',
		  friends: '5',
		  active: 'true',
		}
	  }
	  
   render() {
    return (
    <Container>
    <View style = {{backgroundColor: '#FFF', flex : 1, }}>

    <ImageBackground
      source={require('../../img/bg_image.png')}
      style={{width: '100%', height: '100%',}}
      >
            <ScrollView>
              <View style = {styles.header}>
              <TouchableOpacity style={{ marginLeft: '5%'}} onPress={() => this._handlePressHome()} >
                <Image style={{width: 25, height: 25, marginTop: 12}} source={require('../../img/home.png')}/>
              </TouchableOpacity>
                <View style ={{flex :1, alignItems: 'flex-start', justifyContent: 'center', marginLeft: '3%'}}>
                    <Text style = {styles.headerText}> Карта клиента </Text>
                </View>
              </View>

              <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center',}}>
                   <Text style = {{ fontSize : 60, color : '#FFF', marginTop : 8, }}>Твоё кафе</Text>
                   <Text style = {styles.second}>АТМОСФЕРНО-КЛАССНО-ВКУСНО</Text>
              </View>

              <View style = { styles.cardBarcode}>
                <Barcode value={this.state.qr} format="CODE128"/>
              </View>

              <View style ={{flex :1, alignItems: 'center', justifyContent: 'center',}}>
                <Text style = { styles.textID}>ID:     {this.state.qr}</Text>
                <Text style = { styles.textWhite}>Это ваш QR-код для получения скидок.</Text>
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
  fontFamily: 'Helvetica',
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
  second: {
    fontFamily: 'Helvetica',
    fontWeight: '800',
    fontSize: 13,
    paddingTop: 10,
    lineHeight: 22,
    color: '#ffffff',
    textAlign: 'center',
    letterSpacing: 4,
    },

});

