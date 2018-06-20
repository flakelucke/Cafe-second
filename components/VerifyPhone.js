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
import Button from 'react-native-button';

export default class VerifyPhone extends Component {

    static navigationOptions = {
      title: 'Подтверждение номера' ,
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
          phone: "",
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
