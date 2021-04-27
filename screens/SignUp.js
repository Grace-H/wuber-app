import React, { Component } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { Avatar } from "react-native-elements";
import stylesCommon from "./styles/stylesCommon";
import axios from "axios";

class SignUp extends Component {
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
  };
  /*
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
        .then(res => console.log(alert("Your account was created!" + "\n" + 
                                        "You may return to the login screen and login. ")))
        .catch( error => {console.log(error)});

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

    axios
      .post("http://localhost:5000/users/add", newUser)
      .then((res) => console.log("success!"))
      .catch((error) => {});
>>>>>>> 014f6c0985d93324290b0d348308681e8e7c37be
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
>>>>>>> 014f6c0985d93324290b0d348308681e8e7c37be
        </TouchableOpacity>

        <Text> {"\n"} </Text>

        <TouchableOpacity
          style={stylesCommon.customBtn}
          onPress={() => this.props.navigation.navigate("Login")}
        >
          <Text style={stylesCommon.customBtnTextWhite}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }*/
}

export default SignUp;
