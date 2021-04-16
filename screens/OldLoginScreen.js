import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { Avatar } from 'react-native-elements';
import TextInput from './styles/TextInputOverride';
import stylesCommon from './Styles/stylescommon';

/*
state = {
  email: '',
  password: '',
  users: [],
}

updateEmail = (text) =>{
  this.setState({ email: text})
}

updatePassword = (text) =>{
  this.setState ({ password: text})
}

login = (email, pass) =>{
  var userEmail = email; 
  var userPass = pass; 
  var users = getUsers(); 

  
  users.forEach(function(email, pass){
    if (userEmail == email && userPass == pass){
      navigation.navigate("Home")
    }
    else {
      Alert.alert('The credentials you supplied could not be' 
      + "\n" 
      + 'determined to be authentic.'
      + "\n"
      + "Please try again. ")
    }
  });   

  alert('email: ' + userEmail + ' password: ' + userPass)
  navigation.navigate("Home")
}

 getUsers() ;{
  axios.get('http://localhost:5000/users')
          .then(response => {
              if(response.data.length > 0) {
                  this.setState({
                      users: response.data
                  });
              }
          })
          .catch(err => console.log(err));
        //return this.state.users;
}

*/

export default function LoginScreen({navigation}) {

  return (
    <View style = {stylesCommon.center}>
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
        //onChangeText ={this.updateEmail}
          />

      <TextInput
        style={{ marginTop: 20 , borderWidth: 1}}
        placeholder="Password" 
        //onChangeText ={this.updatePassword}
        />
        
        <Text> {"\n"} </Text>
        <Button
        title = "Submit" 
        //onPress = {
          //() => this.login(this.state.email, this.state.password)
        //}
        />
        <Text>
          {"\n"}
        </Text>
      
        <Button
          title = "Create Account"
          onPress = {() => Alert.alert('You will be soon be redirected to create an Account')}
        />
      </View>
    );
   
 }
 


