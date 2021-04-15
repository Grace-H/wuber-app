import React, {Component} from 'react';
import { View, TouchableOpacity, Text, TextInput, Alert } from 'react-native';
import { Avatar } from 'react-native-elements';
import stylesCommon from './styles/stylesCommon';

class LoginScreen extends Component {

  state = {
    email: '',
    password: '',
  }

  updateEmail = (text) =>{
    this.setState({ email: text})
  }
  
  updatePassword = (text) =>{
    this.setState ({ password: text})
  }
  
  login = (email, pass) => {
    alert('email: ' + email + '\n' + 'password: ' + pass)
  }


  render (){
    return (

      <View style={{ flex: 1, alignItems: 'center' }}>

        <Text>
          {"\n"}
        </Text>

        <Avatar
          source = {require('../assets/WuberLogo.png')}
          size = {200}
        />

        <Text>
          {"\n"}{"\n"}{"\n"}
        </Text>

        <TextInput
        style ={stylesCommon.loginInput}
        placeholder="Email Address" 
        onChangeText ={this.updateEmail}
          />

        <TextInput
        style={stylesCommon.loginInput}
        placeholder="Password" 
        onChangeText ={this.updatePassword}
        />

        <Text> {"\n"} </Text>
        

        <TouchableOpacity 
          style = {stylesCommon.customBtn}
          onPress = {() => this.login(this.state.email, this.state.password)}>
          <Text style={stylesCommon.customBtnTextWhite}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    );

  }
  }

  export default LoginScreen