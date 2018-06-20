import React, { Component } from 'react';
import { 
    View, 
    StyleSheet, 
    Image, 
    ScrollView, 
    Text, 
    FlatListS, 
    ImageBackground, 
    Alert, 
    TouchableOpacity, 
    AsyncStorage,
    TextInput
} from 'react-native';

import 'react';
import { 
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
    Form
} from 'native-base';
import Button from 'react-native-button';
import md5 from "react-native-md5";

export default class LoginForm extends Component {

    static navigationOptions = {
        header: null,
    }

	constructor(props) {
    super(props);
        this.state = {
	    password: "",
	    login: "",
}
}
    
_handlePress = async (login,password) => {
    let pass_md5 = md5.str_md5(password);
    fetch('https://api-for-cafe.herokuapp.com/api/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
      "email": login,
      "password": pass_md5
  }),
}).then((response)=>response.json())
.then((responseJson) => {
    if (responseJson["auth"])
    this.props.navigation.navigate('MainCLientScreen');
    else 
    alert('Проверьте введенные данные');
})
.catch((error) => {
    console.error(error.toString());
    Alert.alert.error.toString();
  });
//должно ли быть return?
 };

render() {
    const { navigate } = this.props.navigation;
    return (

        <View style={[styles.container, {flexDirection: 'column'}]}>
        <ScrollView>
        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center',}}>
            <Text style={styles.paragraph}>Твое кафе</Text>
            <Text style={styles.second}>АТМОСФЕРНО-КЛАССНО-ВКУСНО</Text>
            <Form style={styles.container}>
                {/* login input */}
                <Item floatingLabel style={styles.loginmargins}>
                    <Label style = {styles.content}>Логин</Label>
                    <Input onChangeText={ (text) => this.setState({ login: text })}></Input>
                </Item>
                {/* password input */}
                <Item floatingLabel style={styles.passwordmargins}>
                    <Label style = {styles.content} >Пароль</Label>
                    <Input secureTextEntry onChangeText={ (text) => this.setState({ password: text })}></Input>
                </Item>
                {/* кнопка входа */}
                <Button
                  onPress={() => this._handlePress(this.state.login, this.state.password)}
                  containerStyle={styles.buttonLog}
                  disabledContainerStyle={{backgroundColor: 'white'}}
                  style={{color:'rgba(145,53,189,77)',fontSize: 13,}}>
                  Войти
                </Button>
                {/* кнопка регистрации */}
                <TouchableOpacity onPress={() => navigate('RegistrationForm')} style={styles.buttonReg}>
                  <Text style = {{color: '#ffffff',fontSize: 15,}}>Регистрация</Text>
                </TouchableOpacity>
            </Form>
            </View>
            </ScrollView>
        </View>
    );
    }
    }

    const styles = StyleSheet.create({
        container: {
        position: 'relative',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(145,53,189,77)',
        },
        paragraph: {
        fontFamily: 'Roboto',
        marginTop: 51,
        fontSize: 60,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ffffff',
        lineHeight: 70,
        },
        second: {
        fontFamily: 'Helvetica',
        fontWeight: '800',
        fontSize: 20,
        paddingTop: 15,
        lineHeight: 22,
        color: '#ffffff',
        textAlign: 'center',
        },
        content: {
        color: '#ffffff',
        },
        loginmargins: {
        paddingLeft: 8,
        marginTop: 62,
        },
        passwordmargins: {
        paddingLeft: 8,
        marginTop: 10,
        },
        buttonTextLog: {
            marginTop : 25,
            padding:10,
            height:40, 
            width : 250 ,
            overflow:'hidden', 
            borderRadius:4, 
            backgroundColor: '#FFDC26'
        },
        buttonTextReg: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '500',
        },
        buttonLog: {
        justifyContent: 'center',
        marginTop: 38,
        width: 343,
        height: 38,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        },
        buttonReg: {
        alignItems: 'center',
        marginTop: 17,
        width: 171,
        height: 18,
        backgroundColor: 'rgba(145,53,189,77)',
        borderRadius: 5,
        }
        });
