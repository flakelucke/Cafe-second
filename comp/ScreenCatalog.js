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


export default class ScreenCatalog extends Component {

  constructor(props) {
     super(props);
     this.state = {
       qr : 'shops123456',
     }
   }

  _handlePress() {

   };

  _handlePressHome() {

  };

  render() {

    return (
    <Container>
    <View style = {{backgroundColor: '#FFF', flex : 1, flexDirection: 'column'}}>

            <ScrollView>
              <View style = {styles.header}>
                <View style ={{flex :1, alignItems: 'center', justifyContent: 'center',}}>
                    <Text style = {styles.headerText}> Каталог </Text>
                </View>
              </View>

                <Text style = {{ color : '#000', textAlign: 'center',margin : 8,}}>Пользуясь нашим приложением, Вы будете в курсе всех наших акций и новостей, также Вы можете увеличивать размер скидки. Для этого достаточно просмотреть и оценить наш товар.</Text>

                <View style = {{marginTop : 16,}}>
                  <Grid >
                    <Row size={50}>
                        <Col size={50}>
                          <View style = {styles.cell}>
                            <TouchableOpacity onPress={() => this._handlePressHome()} >
                              <Image style = {styles.img} source={require('../img/img_1.png')}/>
                            </TouchableOpacity>
                          <View style = {styles.bottomLine}><Text style = {{color : '#4C0A6B',}}>Мужская обувь</Text></View>
                          </View>
                        </Col>

                        <Col size={50}>
                          <View style = {styles.cell}>
                            <TouchableOpacity onPress={() => this._handlePressHome()} >
                              <Image style = {styles.img} source={require('../img/img_2.png')}/>
                            </TouchableOpacity>
                          <View style = {styles.bottomLine}><Text style = {{color : '#4C0A6B',}}>Мебель</Text></View>
                          </View>
                        </Col>
                    </Row>

                    <Row size={50}>
                        <Col size={50}>
                          <View style = {styles.cell}>
                            <TouchableOpacity onPress={() => this._handlePressHome()} >
                              <Image style = {styles.img} source={require('../img/img_3.png')}/>
                            </TouchableOpacity>
                          <View style = {styles.bottomLine}><Text style = {{color : '#4C0A6B',}}>Шубы</Text></View>
                          </View>
                        </Col>

                        <Col size={50} >
                          <View style = {styles.cell}>
                            <TouchableOpacity onPress={() => this._handlePressHome()} >
                              <Image style = {styles.img} source={require('../img/img_4.png')}/>
                            </TouchableOpacity>
                            <View style = {styles.bottomLine}><Text style = {{color : '#4C0A6B',}}>Ювелирные изделия</Text></View>
                          </View>
                        </Col>
                    </Row>
                  </Grid>
                </View>

            </ScrollView>
    </View>
    </Container>
    );
  }
}


const styles = StyleSheet.create({

bottomLine : {
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor : '#FFDC26',
  height : 25,
  width : '100%',

},
img : {
  height : 150,
},
cell :{
  alignItems: 'center',
  justifyContent: 'center',
  height : 175,
  borderTopWidth : 1,
  borderRightWidth : 0.5,
  borderLeftWidth : 0.5,
  borderColor : '#C4C4C4',
},

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
