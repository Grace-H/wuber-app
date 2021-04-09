import React from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { Avatar } from 'react-native-elements';

const LoginScreen = ({navigation}) => {
  const [secure, setSecure] = React.useState(props.secure);
  return (
    <View style={styles.center}>

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
      
      <Text> Email: </Text>
      <TextInput 
          style = {{ height: 20, borderColor: 'black', borderWidth: 1}}
          placeholder = "                          "
      />
      <Text> Password: </Text>
      <TextInput 
          style = {{ height: 20, borderColor: 'black', borderWidth: 1}}
          setFocus = {focus}
          onChangeText = {text => props.onChangeText(text)}
          onFocus = {() => setFocus(true)}
          onBlur = {() => setFocus(false)}
          secureTextEntry={secure}
          placeholder = {props.placeholder}                         
      />
      {props.secure && <Icon style = {{ padingRight: 15, }} name = {secure ? "eye" : 'eye-slash'} size = {20} color = 'gray'
      onPress = {() => setSecure(!secure)}/>}
      {!props.secure && <View style = {{paddingRight: 15, width: 30, height: 10}}/>}
      <Button
      title = "Submit" 
      onPress = {() => navigation.navigate('Take a Trip')}
      />
      <Button>
        title = "Create Account"
        // onPress = {() => navigation.navigate('Create Account')}
      </Button>
      
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default LoginScreen;