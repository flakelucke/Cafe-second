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

export default class ScreenAction extends Component {
  constructor(props) {
     super(props);
     this.state = {
       loading: 'true',
       articles : '', 
     }
     this.fetchPostCode();
     console.log('loading');
   }

  _handlePress() {

   };

   _handlePressHome() {

    };

  async fetchPostCode() {
    try {
    let response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e78037e1483f47d6a3e86947b8a09e54');
    let responseJson = await response.json();
    console.log('loading news false');
    console.log(responseJson['articles']);
      this.setState({
        articles: responseJson['articles'],
        loading : false,
      })
    } catch (err) {
      console.log(err);
    }

  }

  render() {

    return (
    <Container>
    <View style = {{backgroundColor: '#FFF', flex : 1, }}>

      <View style = {styles.header}>
        <View style ={{flex :1, alignItems: 'center', justifyContent: 'center',}}>
            <Text style = {styles.headerText}> Акции </Text>
        </View>
      </View>

      <Spinner style = {this.state.loading ? {display:'flex',} : {display:'none',}} color='blue' />
      <Content>
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0, marginTop : 0, }}>
      <FlatList
           data={this.state.articles}
           renderItem={({item}) =>

            <View style = {{ flex :1, flexDirection: 'column', padding : 8,}}>
                <View style = {{  flexDirection: 'row',}}>

                    <AsyncImageAnimated
                      animationStyle = {'explode'}
                      source={{
                        uri: item.urlToImage
                      }}
                      placeholderSource={require('../img/no_photo.png')}
                      style={{
                        height: 60,
                        width: 60,
                        borderRadius:8,
                        borderColor: "#FFF",
                      }}
                    />
                  <View style = {{ flex : 0.98, flexDirection: 'column', marginLeft :8, marginRight: 4,}}>
                    <Text numberOfLines={2} style ={{color :'#000', }}>{item.title}</Text>
                    <Text>{item.publishedAt}</Text>
                  </View>
                  <Image style={styles.home} source={require('../img/chevron.png')}/>

                </View>

              <View style = {{height : '0.5%', backgroundColor: "#CED0CE",}}></View>

            </View>
           }
           keyExtractor={(item, index) => index}
        />
      </List>
      </Content>
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
