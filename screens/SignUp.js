import React, { Component } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { Avatar } from "react-native-elements";
import stylesCommon from "./styles/stylesCommon";
import firebase from "firebase";
import axios from "axios";
import auth from '@react-native-firebase/auth';

export default function SignUp({ navigation }) {
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
    var userName = state.name;
    var userEmail = state.email;
    var userPass = state.password;
    var userYear = state.year;

    if (
      userName.trim() == "" ||
      userEmail.trim() == "" ||
      userPass.trim() == "" ||
      userYear.trim() == ""
    ) {
      alert(
        "One or more fields are empty. Please input data and submit again."
      );
    } else {
      const newUser = {
        name: userName,
        email: userEmail,
        password: userPass,
        year: userYear,
      };

      axios
        .post("http://localhost:5000/users/add", newUser)
        .then((res) =>
          alert(
            "Your account was created!" +
              "\n" +
              "You may return to the login screen and login. "
          )
        )
        .catch((error) => {
          alert("There was an error adding your account." + "\n" + 
          "Please make sure your password is at least 8 characters.");
        });

        //firebase.auth().createUserWithEmailAndPassword(email,password)

      //alert("It looks like your username or email is already used." + "\n"
      //  + "Please try again.")
    }
  };
  //const doRegister = () =>{ auth().createUserWithEmailAndPassword(email, password)};


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
        onChangeText={(text) => updateName(text)}
        autoCorrect={false}
      />

      <TextInput
        style={stylesCommon.loginInput}
        placeholder="Email Address"
        onChangeText={(text) => updateEmail(text)}
        autoCorrect={false}
        autoCapitalize='none'
        keyboardType='email-address'
      />

      <TextInput
        style={stylesCommon.loginInput}
        placeholder="Password"
        secureTextEntry={true}
        autoCapitalize='none'
        onChangeText={(text) => updatePassword(text)}
      />

      <TextInput
        style={stylesCommon.loginInput}
        placeholder="Graduating Year"
        onChangeText={(text) => updateYear(text)}
      />

      <Text> {"\n"} </Text>

      <TouchableOpacity
        style={stylesCommon.customBtn}
        onPress={() => createAccount()}
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
