import React, {Component} from 'react';
import { View, TouchableOpacity, Text, TextInput, Alert } from 'react-native';
import { Avatar } from 'react-native-elements';
import stylesCommon from './styles/stylesCommon';
import axios from 'axios'; 

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
    var userEmail = email; 
    var userPass = pass; 
    var users = []; 
    this.getUsers(); 

  }
   
  /*
  * At the moment this method fills the user array above
  * with users from the database. This will probably end up getting 
  * removed. 
  */
  getUsers() {
    axios.get('http://localhost:5000/users')
            .then(response => {
                if(response.data.length > 0) {
                    this.setState({
                        users: response.data
                    });
                }
            })
            .catch(err => console.log(err));
        
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
          onPress = {() => alert('This function and page has not been created yet')}>
          <Text style={stylesCommon.customBtnTextWhite}>
            Create Account
          </Text>
        </TouchableOpacity>
      </View>
    );

  }
  }

  export default LoginScreen