import React, { Component } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { Avatar } from "react-native-elements";
import stylesCommon from "./styles/stylesCommon";
import axios from "axios";

class SignUp extends Component {
<<<<<<< HEAD

    state = {
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
      var userName = this.state.name; 
      var userEmail = this.state.email;
      var userPass = this.state.password; 
      var userYear = this.state.year; 

      
=======
  userInput = {
    name: "",
    email: "",
    password: "",
    year: "",
  };

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
    var userName = this.userInput.name;
    console.log(userName);
    var userEmail = this.userInput.email;
    var userPass = this.userInput.password;
    var userYear = this.userInput.year;

    /*
>>>>>>> a71a27602d7a6f5f940de30a61a51ac844cb2440
      if (userName.trim() == "" || userEmail.trim() == "" || 
     userPass.trim() == "" || userYear.trim() == ""){
        alert("One or more fields are empty. Please input data and submit again.")
        alert(userName + " " + userEmail + " " + userPass + " " + userYear)
      }else {

        const user = {
          name: userName, 
          email: userEmail, 
          password: userPass, 
          year: userYear,
        }
        
        //alert(newUser.name + " " + newUser.email + " " + newUser.password + " " + newUser.year)

<<<<<<< HEAD
        axios.post('http://localhost:5000/users/add', user)
        .then(res => console.log(res.data))
        .catch( error => {alert(error)});

        //alert("It looks like your username or email is already used." + "\n" 
        //  + "Please try again.")

      }
      
=======
    const newUser = {
      name: userName,
      email: userEmail,
      password: userPass,
      year: userYear,
    };

    console.log(newUser);
>>>>>>> a71a27602d7a6f5f940de30a61a51ac844cb2440

    axios
      .post("http://localhost:5000/users/add", newUser)
      .then((res) => console.log("success!"))
      .catch((error) => {});
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
          placeholder="Name"
          onChangeText={this.updateName}
        />

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

        <TextInput
<<<<<<< HEAD
        style={stylesCommon.loginInput}
        placeholder="Graduating Year"
        onChangeText={this.updateYear} 
        />    
        
        <Text> {"\n"} </Text>

        <TouchableOpacity 
          style = {stylesCommon.customBtn}
          onPress = {() => this.createAccount()}>
          <Text style={stylesCommon.customBtnTextWhite}>
            Sign Up
          </Text>
=======
          style={stylesCommon.loginInput}
          placeholder="Year in College"
          onChangeText={this.updateYear}
        />

        <Text> {"\n"} </Text>

        <TouchableOpacity
          style={stylesCommon.customBtn}
          onPress={() => this.createAccount()}
        >
          <Text style={stylesCommon.customBtnTextWhite}>Sign Up</Text>
>>>>>>> a71a27602d7a6f5f940de30a61a51ac844cb2440
        </TouchableOpacity>

        <Text> {"\n"} </Text>

        <TouchableOpacity
          style={stylesCommon.customBtn}
          onPress={() => alert("This will take you back to the login screen.")}
        >
          <Text style={stylesCommon.customBtnTextWhite}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SignUp;
