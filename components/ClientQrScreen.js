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
} from 'react-native';

import { Col, Row, Grid } from "react-native-easy-grid";
import { View, Container, Header, Content, Left, Body, Title , Card, CardItem, Input, Item, Label, Form, Fab,} from 'native-base';
import Button from 'react-native-button';
import 'react';
import TabQRClient from './Tabs/TabQRClient.js';
import TabSharesClient from './Tabs/TabSharesClient.js';

export default class ClientQrScreen extends Component {
    static navigationOptions = {
        header: null
    }
    constructor() {
    super()
    this.state = {
        page: "TabQRClient",
        screen2: false,
    }
 }

 _handlePressQR() {
    this.setState({ page: 'TabQRClient' });

  };

  _handlePressAction() {
    this.setState({ page: 'TabSharesClient' });
    console.log(this.state.page);
  };

  getTextTab(type) {
    var myColor = "#929292";
    var mySize = 12;

    if(this.state.page == type) {
      var myColor = "#4C0A6B";
    }

    return {
      color : myColor,
      fontSize : mySize,
    };


  }
    render() {
        return (
            <View style={styles.container}>
            {
    
            }
            {this.state.page === "TabQRClient" && <TabQRClient/>}
            {this.state.page === "TabSharesClient" && <TabSharesClient/>}
    
            <View style = {styles.bottomBar}>
              <Grid>
                <Col size={33} style = {styles.bottomTab}>
                  <TouchableOpacity onPress={() => this._handlePressQR()} style = {styles.bottomTab} >
                    <Image style = {styles.tab} source={this.state.page == "TabQRClient" ? require('../img/barcode.png') : require('../img/barcode_dark.png')}/>
                    <Text style = { this.getTextTab('TabQRClient') }>Штрих-код</Text>
                  </TouchableOpacity>
                </Col>
    
                <Col size={34} style = {styles.bottomTab}>
                  <TouchableOpacity onPress={() => this._handlePressAction()} style = {styles.bottomTab} >
                    <Image style = {styles.tab} source={this.state.page == "TabSharesClient" ? require('../img/catalog.png') : require('../img/catalog_dark.png')}/>
                    <Text style = { this.getTextTab('ScreenCatalog') }>Каталог</Text>
                  </TouchableOpacity>
    
                </Col>
              </Grid>
            </View>
          </View>
        );
      }
    }

const styles = StyleSheet.create({
    textTab : {
        color : '#929292',
        fontSize : 12,
      },
    
      tab : {
        width: 25,
        height: 25,
      },
      container: {
        flex: 1
      },
    
      bottomTab : {
        alignItems: 'center',
        justifyContent: 'center',
      },
      bottomBar : {
        borderWidth: 1,
        borderRadius: 1,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#ddd',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : '#FFF',
        height : 50,
        elevation: 1,
      },
});