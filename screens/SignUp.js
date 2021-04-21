import React, {Component} from 'react';
import { View, TextInput, TouchableOpacity, Text} from 'react-native';
import { Avatar } from 'react-native-elements';
import stylesCommon from './styles/stylesCommon';

class SignUp extends Component {

    userInput = {
      name: "", 
      email: "",
      password: "",
      year: "",
    }

    /**
     * These four function keeps our variables
     * updated with user input. 
     */
    updateName = (text) => {
      this.setState({ name: text });
    };
    updateEmail = (text) => {
      this.setState({ email: text });
    };
    updatePassword = (text) => {
      this.setState({ password: text });
    };
    updateYear = (text) => {
      this.setState({ year: text });
    };

    createAccount = () => {
      var name = this.userInput.name; 
      var email = this.userInput.email;
      var password = this.userInput.password; 
      var year = this.userInput.year; 

      if (name.trim() == "" || email.trim() == "" || 
      password.trim() == "" || year.trim() == ""){
        alert("One or more fields are empty. Please input data and submit again.")
      }

    }

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
        style = {stylesCommon.loginInput}
        placeholder = "Name"
        onChangeText={this.updateName}
        />

        <TextInput
        style ={stylesCommon.loginInput}
        placeholder="Email Address" 
        onChangeText={this.updateEmail}
          />

        <TextInput
        style={stylesCommon.loginInput}
        placeholder="Password" 
        onChangeText={this.updatePassword}
        />  

        <TextInput
        style={stylesCommon.loginInput}
        placeholder="Year in College"
        onChangeText={this.updateYear} 
        />    
        

        <Text> {"\n"} </Text>
        

        <TouchableOpacity 
          style = {stylesCommon.customBtn}
          onPress = {() => this.createAccount()}>
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