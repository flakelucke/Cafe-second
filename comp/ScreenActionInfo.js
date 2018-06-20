import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
  Text,
  FlatLis,
  ImageBackground,
  Alert,
  TouchableOpacity,
  AsyncStorage} from 'react-native';
import { List, ListItem, SearchBar } from "react-native-elements";
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
  Spinner,
  Thumbnail,
} from 'native-base'; // 2.3.6
import { Col, Row, Grid } from "react-native-easy-grid";
import Button from 'react-native-button';
import 'react';
import PropTypes from 'prop-types';
import Barcode from 'react-native-barcode-builder';
import * as firebase from 'firebase';
import AsyncImageAnimated from 'react-native-async-image-animated';

export default class ScreenActionInfo extends Component {
  constructor(props) {
     super(props);
     this.state = {
       loading: 'true',
       articles : '',
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
    <ScrollView style = {{backgroundColor: '#FFF', }}>
      <View style = {styles.header}>
        <View style ={{justifyContent: 'center',}}>
          <TouchableOpacity onPress={() => this._handlePressHome()} >
            <Image style={styles.home} source={require('../img/home.png')}/>
          </TouchableOpacity>
        </View>

        <View style ={{flex :1, alignItems: 'center', justifyContent: 'center',}}>
            <Text style = {styles.headerText}> Акции </Text>
        </View>
        </View>

        <AsyncImageAnimated
          animationStyle = {'explode'}
          source={{
            uri: 'http://www.marko.by/i/photo/otkrytka_600h400.jpg'
          }}
          placeholderSource={require('../img/no_photo.png')}
          style={{
            width : '100%',
            height : 220,
          }}
        />

        <Text style = {styles.textDescr}>
          Весна - это всегда удивительно, даже если её начало холодное, зимнее, снежное. Мы от всей души поздравляем поклонниц бренда Marko с Международным женским днём и надеемся, что тепло всё-таки придёт! Спасибо, наши прекрасные, милые, добрые, за то, что дарите этому миру красоту... и настоящую весну.
          С 8 марта!
        </Text>
    </ScrollView>
    </View>
    </Container>
    );
  }
}


const styles = StyleSheet.create({

textDescr : {

  margin : 10,
  color: '#000',

},

home : {
    width: 15,
    height: 15,
    marginTop : 6,
    marginLeft : 8,
  },
headerText : {

  color : 'white',
  fontSize : 18,

},

header : {

  flexDirection: 'row',
  height : 48,
  backgroundColor: '#4C0A6B',
},


  container: {

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width:null,
    height:null,
  },

});
