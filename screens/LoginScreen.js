import React from 'react';
import { View, TouchableOpacity, Text, TextInput, Alert } from 'react-native';
import { Avatar } from 'react-native-elements';
import stylesCommon from './styles/stylesCommon';

export default function HomeScreen({navigation}) {

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

    return (

      <View style={{ flex: 1, alignItems: 'center' }}>

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
        

        <TouchableOpacity 
          style = {stylesCommon.customBtn}
          onPress = {() => Alert.alert('You will be soon be redirected to create an Account')}>
          <Text style={stylesCommon.customBtnTextWhite}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    );
  }