import React, { Component } from 'react';
import { View, StyleSheet, Image,TouchableOpacity,} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge,Card } from 'native-base';
import Tabbar from 'react-native-tabbar-bottom'
import { Col, Row, Grid } from "react-native-easy-grid";
import ScreenQR from './ScreenQR';
import ScreenCatalog from './ScreenCatalog';
import ScreenAction from './ScreenAction';

export default class exampleTabs extends Component {
  static navigationOptions = {
          header: null
      }
  constructor() {
    super()
    this.state = {
      page: "ScreenQR",
      screen2: false,
    }
  }

  _handlePressQR() {
    this.setState({ page: 'ScreenQR' });

  };

  _handlePressAction() {
    this.setState({ page: 'ScreenAction' });
    console.log(this.state.page);
  };

  _handlePressCatalog() {
    this.setState({ page: 'ScreenCatalog' });
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
        {this.state.page === "ScreenQR" && <ScreenQR />}
        {this.state.page === "ScreenCatalog" && <ScreenCatalog />}
        {this.state.page === "ScreenAction" && <ScreenAction />}

        <View style = {styles.bottomBar}>
          <Grid>
            <Col size={33} style = {styles.bottomTab}>
              <TouchableOpacity onPress={() => this._handlePressQR()} style = {styles.bottomTab} >
                <Image style = {styles.tab} source={this.state.page == "ScreenQR" ? require('../img/barcode.png') : require('../img/barcode_dark.png')}/>
                <Text style = { this.getTextTab('ScreenQR') }>Штрих-код</Text>
              </TouchableOpacity>
            </Col>

            <Col size={34} style = {styles.bottomTab}>
              <TouchableOpacity onPress={() => this._handlePressCatalog()} style = {styles.bottomTab} >
                <Image style = {styles.tab} source={this.state.page == "ScreenCatalog" ? require('../img/catalog.png') : require('../img/catalog_dark.png')}/>
                <Text style = { this.getTextTab('ScreenCatalog') }>Каталог</Text>
              </TouchableOpacity>

            </Col>

            <Col size={33} style = {styles.bottomTab}>
              <TouchableOpacity onPress={() => this._handlePressAction()} style = {styles.bottomTab} >
                <Image style = {styles.tab} source={this.state.page == "ScreenAction" ? require('../img/news.png') : require('../img/news_dark.png')}/>
                <Text style = {this.getTextTab('ScreenAction')}>Акции</Text>
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
