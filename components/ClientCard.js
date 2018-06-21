import React, { Component } from 'react';
import { 
    View, 
    StyleSheet, 
    Image, 
    ScrollView, 
    Text, 
    FlatList, 
    ImageBackground, 
    Alert, 
    TouchableOpacity, 
    AsyncStorage,
    TextInput
} from 'react-native';

import 'react';
import { Container, Header, Content, Left, Body, Title ,Tab,Tabs} from 'native-base';
import TabCatalog from './Tabs/TabCatalog.js';
import TabFavorites from './Tabs/TabFavorites.js';

export default class ClientCard extends Component {

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <Container>
                <Tabs initialPage={0} tabBarUnderlineStyle={{borderBottomWidth:4, borderBottomColor: '#FFDC26'}}>
                    <Tab heading="Каталог" tabStyle={{backgroundColor: '#4C0A6B'}} activeTabStyle={{backgroundColor: '#4C0A6B'}}>
                      <TabCatalog></TabCatalog>
                    </Tab>
                    <Tab heading="Избранное" tabStyle={{backgroundColor: '#4C0A6B'}} activeTabStyle={{backgroundColor: '#4C0A6B'}}>
                      {/* <TabFavorites></TabFavorites> */}
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}

const styles = StyleSheet.create({

  });
