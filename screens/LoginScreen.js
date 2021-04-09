import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { Avatar } from 'react-native-elements';
import TextInput from './styles/TextInputOverride';

const LoginScreen = ({navigation}) => {
  return (
    <View style = {styles.center}>
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
        placeholder="Email" />
      <TextInput
        style={{ marginTop: 20 , borderWidth: 1}}
        placeholder="Password" />
        
        <Text> {"\n"} </Text>
        <Button
        title = "Submit" 
        onPress = {() => navigation.navigate('Take a Trip')}
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

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default LoginScreen;