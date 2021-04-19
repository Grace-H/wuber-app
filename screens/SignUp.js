import React, {Component} from 'react';
import { View, TextInput, TouchableOpacity, Text} from 'react-native';
import { Avatar } from 'react-native-elements';
import stylesCommon from './styles/stylesCommon';

class SignUp extends Component {

    render(){
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
          />

        <TextInput
        style={stylesCommon.loginInput}
        placeholder="Password" 
        />    

        <Text> {"\n"} </Text>
        

        <TouchableOpacity 
          style = {stylesCommon.customBtn}
          onPress = {() => alert('You are now signed up!')}>
          <Text style={stylesCommon.customBtnTextWhite}>
            Sign Up
          </Text>
        </TouchableOpacity>

        <Text> {"\n"} </Text>

        <TouchableOpacity
        style = {stylesCommon.customBtn}
          onPress = {() => alert('This will take you back to the login screen.')}>
          <Text style={stylesCommon.customBtnTextWhite}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
        
       

      );
    }
}

export default SignUp