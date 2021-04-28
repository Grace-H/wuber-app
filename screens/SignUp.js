import React, { Component } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { Avatar } from "react-native-elements";
import stylesCommon from "./styles/stylesCommon";
import axios from "axios";

export default function SignUp() {
  const state = {
    name: "",
    email: "",
    password: "",
    year: "",
  };

  /**
   * These four function keeps our variables
   * updated with user input.
   */
  const updateName = (text) => {
    state.name = text;
  };
  const updateEmail = (text) => {
    state.email = text;
  };
  const updatePassword = (text) => {
    state.password = text;
  };
  const updateYear = (text) => {
    state.year = text;
  };

  const createAccount = () => {
    var userName = this.state.name;
    var userEmail = this.state.email;
    var userPass = this.state.password;
    var userYear = this.state.year;

    if (
      userName.trim() == "" ||
      userEmail.trim() == "" ||
      userPass.trim() == "" ||
      userYear.trim() == ""
    ) {
      alert(
        "One or more fields are empty. Please input data and submit again."
      );
      alert(userName + " " + userEmail + " " + userPass + " " + userYear);
    } else {
      const user = {
        name: userName,
        email: userEmail,
        password: userPass,
        year: userYear,
      };

      //alert(newUser.name + " " + newUser.email + " " + newUser.password + " " + newUser.year)

      axios
        .post("http://localhost:5000/users/add", user)
        .then((res) =>
          console.log(
            "Your account was created!" +
              "\n" +
              "You may return to the login screen and login. "
          )
        )
        .catch((error) => {
          console.log(error);
        });

      //alert("It looks like your username or email is already used." + "\n"
      //  + "Please try again.")
    }
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

      <TextInput
        style={stylesCommon.loginInput}
        placeholder="Name"
        onChangeText={updateName()}
      />

      <TextInput
        style={stylesCommon.loginInput}
        placeholder="Email Address"
        onChangeText={updateEmail()}
      />

      <TextInput
        style={stylesCommon.loginInput}
        placeholder="Password"
        onChangeText={updatePassword()}
      />

      <TextInput
        style={stylesCommon.loginInput}
        placeholder="Graduating Year"
        onChangeText={updateYear()}
      />

      <Text> {"\n"} </Text>

      <TouchableOpacity
        style={stylesCommon.customBtn}
        onPress={() => this.createAccount()}
      >
        <Text style={stylesCommon.customBtnTextWhite}>Sign Up</Text>
      </TouchableOpacity>

      <Text> {"\n"} </Text>

      <TouchableOpacity
        style={stylesCommon.customBtn}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={stylesCommon.customBtnTextWhite}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}
