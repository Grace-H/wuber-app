import React, { Component } from "react";
import { View, TouchableOpacity, Text, Input, TextInput, StyleSheet} from "react-native";
import { Avatar } from "react-native-elements";
import stylesCommon from "./styles/stylesCommon";
import axios from "axios";
import App from "../App.js";
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
        <Text>{"\n"}</Text>

        <Avatar source={require("../assets/WuberLogo.png")} size={200} />

        <Text>
          {"\n"}
          {"\n"}
          {"\n"}
        </Text>
      <View style = {styles.loginContainer}>
        <Icon
          style = {styles.searchIcon}
          name = 'envelope'
          color = '#000'
          size = {14}
        />
        <TextInput
          style={styles.input}
          //leftIcon ={{type: 'font-awesome', name: 'fa-envelope'}}
          placeholder="Email Address"
          keyboardType='email-address'
          autoCorrect={false}
          onChangeText={text => updateEmail(text)}
        />
      </View>
      <View style = {styles.loginContainer}>
        <Icon
          style = {styles.searchIcon}
          name = 'lock'
          color = '#000'
          size = {14}
        />
        <TextInput
          style={styles.input}
          //leftIcon ={{type: 'font-awesome', name: 'fa-lock'}}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={text => updatePassword(text)}
        />
      </View>
        <Text> {"\n"} </Text>

        <TouchableOpacity
          style={stylesCommon.customBtn}
          onPress={() => authenticate(state.email, state.password)}
        >
          <Text style={stylesCommon.customBtnTextWhite}>Submit</Text>
        </TouchableOpacity>

        <Text> {"\n"} </Text>

        <TouchableOpacity
          style={stylesCommon.customBtn}
          onPress={ () => {navigation.navigate("Sign Up")}}
        >
          <Text style={stylesCommon.customBtnTextWhite}>Create Account</Text>
        </TouchableOpacity>
      </View>
    );
  
}
const styles = StyleSheet.create({
  loginContainer: {
    flex : 1,
    flexDirection : 'row',
    justifyContent: 'center',
    alignItems : 'center',
    borderBottomWidth: 1,
   // borderColor: '#000',
  },
  searchIcon:{
    padding : 10,
  },
  input : {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
});

