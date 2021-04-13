import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { Avatar } from 'react-native-elements';
import TextInput from './styles/TextInputOverride';
import axios from 'axios'; 
import { render } from "react-dom";

const LoginScreen = ({navigation}) => {

  state = {
    email: '',
    password: ''
  }

  updateEmail = (text) =>{
    this.setState({ email: text})
  }

  updatePassword = (text) =>{
    this.setState ({ password: text})
  }

  /*
  * This is where the authentication should happen. 
  */
  login = (email, pass) =>{
    alert('email: ' + email + ' password: ' + pass)
  }

    return (
      <View style = {styles.center}>
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
          style ={{marginTop: 20, borderWidth: 1}}
          placeholder="Email Address" 
          onChangeText ={this.updateEmail}
            />

        <TextInput
          style={{ marginTop: 20 , borderWidth: 1}}
          placeholder="Password" 
          onChangeText ={this.updatePassword}
          />
          
          <Text> {"\n"} </Text>
          <Button
          title = "Submit" 
          onPress = {
            () => this.login(this.state.email, this.state.password)
          }
          />
          <Text>
            {"\n"}
          </Text>

          <Button
            title = "Create Account"
            onPress = {() => Alert.alert('You will be soon be redirected to create an Account')}
          />
        </View>
      )
   
 }

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default LoginScreen;