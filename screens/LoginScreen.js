import React, {Component} from 'react';
import { View, TouchableOpacity, Text, TextInput, Alert } from 'react-native';
import { Avatar } from 'react-native-elements';
import stylesCommon from './styles/stylesCommon';
import axios from 'axios'; 
import { useNavigation } from '@react-navigation/core';
import UserModel from "../backend/models/user.model.js";

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
  
  /*
  * This is the function that will be called when
  * the user clicks 'submit'.
  */ 
  login = (email, pass) => {

    //The model I will be using to search for users. 
    var userModel = <UserModel/>;    
    var userEmail = email; 
    var userPass = pass; 

    userModel.find({'email' : userEmail}, {'password' : userPass}, function (err, user){
      if (user != null){

      }else{
        alert('Your email or password is incorrect. Please try again.')
      }
    });

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

        <Text> {"\n"} </Text>

        <TouchableOpacity
        style = {stylesCommon.customBtn}
          onPress = {() => navigation.navigate("Sign Up")}>
          <Text style={stylesCommon.customBtnTextWhite}>
            Create Account
          </Text>
        </TouchableOpacity>
      </View>
    );

  }
  }

  export default LoginScreen