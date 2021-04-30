import React, { Component } from "react";
import { View, TouchableOpacity, Text, TextInput, StyleSheet} from "react-native";
import { Avatar } from "react-native-elements";
import stylesCommon from "./styles/stylesCommon";
import axios from "axios";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LoginScreen({navigation}) {

  const state = {
    email: "",      
    password: "",
  };
  

  const updateEmail = (text) => {
    state.email = text;
  };

  const updatePassword = (text) => {
    state.password = text; 
  };

  /*
   * This is the function that will be called when
   * the user clicks 'submit'.
   */
  const authenticate = (email, pass) => {
    const query = {
      userEmail: email,
      password: pass,
    };

    var user = null; 

    axios({
      method: "get",
      url: "http://localhost:5000/users/searchUser",
      params: {
        userEmail: query.userEmail,
        password: query.password,
      },
    })
        .then(response=>{
          if (response.data !== null){
              user = response.data; 
              navigation.navigate("App");
          }
          else { 
            alert("The credentials you provided could not be determined to be authentic."
            + "\n" 
            + "Please try again."
            );
          }
        }) 
        .catch(err => console.log(err));
    
  };


    return (      
      <View style={{ flex: 1, alignItems: "center" }}>

        <Avatar source={require("../assets/WuberLogo.png")} size={200} marginTop={100} />

        <Text>
          {"\n"}
          {"\n"}
          {"\n"}
        </Text>
        
        
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          keyboardType='email-address'
          autoCorrect={false}
          autoCapitalize='none'
          onChangeText={text => updateEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize='none'
          onChangeText={text => updatePassword(text)}
        />
        
         <TouchableOpacity
          onPress={ () => {navigation.navigate("Sign Up")}}>
          <Text style={stylesCommon.textItalic}>Don't have an account? Sign up!</Text>
        </TouchableOpacity>

        <View style={{marginTop: 20}}></View>

        <TouchableOpacity
          style={stylesCommon.customBtn}
          onPress={() => authenticate(state.email, state.password)}
        >
          <Text style={stylesCommon.customBtnTextWhite}>Login</Text>
        </TouchableOpacity>

      </View>
    );
  
}
const styles = StyleSheet.create({
  input : {
    height: 45,
    justifyContent: 'center',
    alignItems : 'center',    
    backgroundColor: '#fff',
    color: '#424242',
    marginTop: 20,
    borderWidth: 2,
    width : 250,
    textAlign: "center",
  },
});

