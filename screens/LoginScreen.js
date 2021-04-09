import React from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { Avatar } from 'react-native-elements';

const LoginScreen = ({navigation}) => {
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
          placeholder = "                          "
      />
      <Button
      title = "Submit" 
      onPress = {() => navigation.navigate('Take a Trip')}
      />
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