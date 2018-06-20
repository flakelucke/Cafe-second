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
import Button from 'react-native-button';
import 'react';
import PropTypes from 'prop-types';
import Barcode from 'react-native-barcode-builder';
import * as firebase from 'firebase';
import AsyncImageAnimated from 'react-native-async-image-animated';
import Grid from 'react-native-grid-component';

export default class ScreenCatalogList extends Component {
  constructor(props) {
     super(props);
     this.state = {
       loading: 'true',
       articles : '',
     }

     console.log('loading');
   }

  _handlePress() {

   };

   _handlePressHome() {

    };


  _renderItem = (data, i) => <View style={styles.item} key={i}>
                <AsyncImageAnimated
                  animationStyle = {'explode'}
                  source={{
                    uri: data.img
                  }}
                  placeholderSource={require('../img/no_photo.png')}
                  style={{
                    height: 140,
                    width: 140,
                    borderRadius:8,
                    borderColor: "#FFF",
                  }}
                />
                <Text>{data.price}</Text>
                <Text>{data.name}</Text>
                </View>

  _renderPlaceholder = i => <View key={i} />

  render() {

    return (
    <Container>
    <View style = {{backgroundColor: '#FFF', flex : 1, }}>

      <View style = {styles.header}>
        <View style ={{flex :1, alignItems: 'center', justifyContent: 'center',}}>
            <Text style = {styles.headerText}> Каталог </Text>
        </View>
      </View>

      <Spinner style = {this.state.loading ? {display:'flex',} : {display:'none',}} color='blue' />
      <Content>
        <Grid
          style={styles.list}
          renderItem={this._renderItem}
          data={[{img : 'http://www.marko.by/i/photo/catalog/t/a_271070_800x800.jpg', name : 'Марко Trend',       price : '101,26'},
                 {img : 'http://www.marko.by/i/photo/catalog/t/a_271076_800x800.jpg', name : 'Марко Trend OK',    price : '91,89'},
                 {img : 'http://www.marko.by/i/photo/catalog/t/a_271075_800x800.jpg', name : 'Марко Trend',       price : '86,25'},
                 {img : 'http://www.marko.by/i/photo/catalog/t/a_271079_800x800.jpg', name : 'Марко Collection',  price : '55,00'}]}
          itemsPerRow={2}
        />
      </Content>
    </View>

      <View style = {styles.bgFilter}>
        <View style = {styles.filterContainer}>
            <View><Text>Фильтр</Text></View>
            <View style = {styles.line}></View>

        </View>
      </View>

    </Container>
    );
  }
}


const styles = StyleSheet.create({

line : {
  backgroundColor : 'rgba(0,0,0,0.26)',
  height :1,
  width : '100%',
  flex : 1,
},

filterContainer :{
  backgroundColor: '#FFF',
  flex : 1,
  width: '100%',
  height: '100%',
  borderRadius: 10,
  backgroundColor: '#FFF',
},

bgFilter :{
  backgroundColor: 'rgba(0,0,0,0.6)',
  flex : 1,
  position : 'absolute',
  width: '100%',
  height: '100%',
  padding : 30,

},

item: {
  flex: 1,
  margin: 1
},

list: {
  flex: 1
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
    width: 10,
    height: 10,
    marginTop : 6,
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
