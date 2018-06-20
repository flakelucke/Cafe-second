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

  import { 
    Container,  
    Content, 
    Left, 
    Body, 
    Title ,
    Card, 
    CardItem, 
    Input, 
    Item, 
    Label, 
    Form
  } from 'native-base'; // 2.3.6


import {Header,Icon} from 'react-native-elements'
import Button from 'react-native-button';
import md5 from "react-native-md5";

export default class RegistrationForm extends Component {

  static navigationOptions = {
    title: 'Регистрация' ,
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
        fio: "",
        email: "",
        password: "",
        replaypassword: "",
        phone: "",
}
}

_handlePressReg = async (fio,email,password,phone,replaypassword) => {

  let pass_md5 = md5.str_md5(password);
  const access="3";

  if(fio == '') {
    Alert.alert(
        "Ошибка ввода",'Введите ФИО!'
     );
     return;
  }

  if(email.indexOf('@') == -1 || email.indexOf('.') == -1 || email.length < 6) {
    Alert.alert(
        "Ошибка ввода",'Некорректный e-mail!'
     );
     return;
  }

  if(password.length  < 6) {
    Alert.alert(
        "Ошибка ввода",'Пароль должен быть более 6-ти символов!'
     );
     return;
  }
  if(replaypassword.length  < 6) {
    Alert.alert(
        "Ошибка ввода",'Пароль должен быть более 6-ти символов!'
     );
     return;
  }

  if(password.indexOf(replaypassword) == -1) {
    Alert.alert(
        "Ошибка ввода",'Пароли не совпадают!'
     );
     return;
  }

  if(phone.length<13) {
    Alert.alert("Проверьте введенный номер");
    return;
  }
  fetch('https://api-for-cafe.herokuapp.com/api/auth/register', {
method: 'POST',
headers: {
  'Content-Type': 'application/json',
},
body: JSON.stringify({
    "name": fio,
    "email": email,
    "password": pass_md5,
    "phone":  phone,
    "access": access,
})

}).then((response)=>response.json())
.then((responseJson) => {
//  alert(responseJson["auth"]);
  if (responseJson["auth"])
  Alert.alert("Успех");
  else 
  Alert.alert("Хуйня");
})
.catch((error) => {
  console.error(error.toString());
  Alert.alert.error.toString();
});
//должно ли быть return?
};

  render() {
    return (
      <View style={{flex: 1,flexDirection : 'column'}}>
        <ScrollView>
        <Form >

          <Item floatingLabel style = {{ marginTop : 10, marginRight : 16, }}>
            <Label style = {{ color : '#000',}} >ФИО</Label>
            <Input style = {{ color : '#000',}} onChangeText={ (text) => this.setState({ fio: text }) }></Input>
          </Item>

          <Item floatingLabel style = {{marginRight : 16, }}>
            <Label style = {{ color : '#000',}} >E-mail</Label>
            <Input style = {{ color : '#000',}} onChangeText={ (text) => this.setState({ email: text }) }></Input>
          </Item>

          <Item floatingLabel style = {{marginRight : 16,}}>
            <Label style = {{ color : '#000',}} >Пароль</Label>
              <Input style = {{ color : '#000',}} secureTextEntry onChangeText={ (text) => this.setState({ password: text }) }></Input>
          </Item>
          <Item floatingLabel style = {{marginRight : 16,}}>
            <Label style = {{ color : '#000',}} >Повторите пароль</Label>
              <Input style = {{ color : '#000',}} secureTextEntry onChangeText={ (text) => this.setState({ replaypassword: text }) }></Input>
          </Item>

          <Item floatingLabel style = {{marginRight : 16, }}>
            <Label style = {{ color : '#000',}} >Введите номер</Label>
            <Input style = {{ color : '#000',}} onChangeText={ (text) => this.setState({ phone: text }) }></Input>
          </Item>
          <View style= {{ alignItems:'center' }}>
            <Button
              onPress={() => this._handlePressReg(this.state.fio,this.state.email,this.state.password,this.state.phone,this.state.replaypassword)}
              containerStyle={{marginTop : 35,padding:10, height:38, width : 343 ,overflow:'hidden', borderRadius:4, backgroundColor: '#FFDC26'}}
              disabledContainerStyle={{backgroundColor: 'white'}}
              style={{fontSize: 14, color: '#333333'}}>
              Готово
            </Button>
          </View>
          </Form>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  home : {
    width: 25,
    height: 25,
    marginLeft : 8,
  },
});
