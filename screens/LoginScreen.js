import React, { Component } from "react";
import { View, TouchableOpacity, Text, TextInput, Alert } from "react-native";
import { Avatar } from "react-native-elements";
import stylesCommon from "./styles/stylesCommon";
import axios from "axios";

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

    const query = {
      userEmail: email, 
      password: pass, 
    }; 

    var authenticated = false; 
    var user = null; 

    axios({
      method: "get",
      url: "http://localhost:5000/users/searchUser",
      params: {
        userEmail: query.userEmail, 
        password: query.password, 
      }
    })
        .then(response=>{
          if (response.data !== null){
            alert("You were able to login!");
            authenticated = true; 
            user = response.data; 
          }
          else { 
            alert("The credentials you provided could not be determined to be authentic."
            + "\n" 
            + "Please try again."
            );
          }
        }) 
        .catch(err => console.log(err)); 
    
       if (authenticated){
        this.props.setUser(user); 
      }
    
  };


  render(  ) {
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
          onPress={() => this.props.navigation.navigate("Sign Up")}
        >
          <Text style={stylesCommon.customBtnTextWhite}>Create Account</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LoginScreen;
