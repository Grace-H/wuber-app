import React, { Component } from "react";
import { View, TouchableOpacity, Text, TextInput, Alert } from "react-native";
import { Avatar } from "react-native-elements";
import stylesCommon from "./styles/stylesCommon";
import axios from "axios";
import { useNavigation } from "@react-navigation/core";
import UserModel from "../backend/models/user.model.js";

class LoginScreen extends Component {
  state = {
    email: "",
    password: "",
  };

  updateEmail = (text) => {
    this.setState({ email: text });
  };

  updatePassword = (text) => {
    this.setState({ password: text });
  };

  /*
   * This is the function that will be called when
   * the user clicks 'submit'.
   */
  login = (email, pass) => {
    var userEmail = email;
    var userPass = pass;
    var authenticated = false; 
    var user = null; 

    axios({
      mathod: "get",
      url: "http://localhost:5000/searchUser",
      params: {userEmail, userPass},
    })
        .then(response=>{
          if (!null){
            authenticated = true; 
            user = response.data; 
          }
          else {
            alert("The credentials you provided could not be determined"
            + "\n" 
            + "to be authentic. Please try again.")
          }
        }) 
        .catch(err => console.log(err)); 
    
       if (authenticated){
        this.props.setUser(user); 
        //navigation.navigate; 
      }
    
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text>{"\n"}</Text>

        <Avatar source={require("../assets/WuberLogo.png")} size={200} />

        <Text>
          {"\n"}
          {"\n"}
          {"\n"}
        </Text>

        <TextInput
          style={stylesCommon.loginInput}
          placeholder="Email Address"
          onChangeText={this.updateEmail}
        />

        <TextInput
          style={stylesCommon.loginInput}
          placeholder="Password"
          onChangeText={this.updatePassword}
        />

        <Text> {"\n"} </Text>

        <TouchableOpacity
          style={stylesCommon.customBtn}
          onPress={() => this.login(this.state.email, this.state.password)}
        >
          <Text style={stylesCommon.customBtnTextWhite}>Submit</Text>
        </TouchableOpacity>

        <Text> {"\n"} </Text>

        <TouchableOpacity
          style={stylesCommon.customBtn}
          onPress={() => navigation.navigate("Sign Up")}
        >
          <Text style={stylesCommon.customBtnTextWhite}>Create Account</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LoginScreen;
