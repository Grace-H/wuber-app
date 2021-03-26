import React from 'react';
import { View, Button, Image } from 'react-native';
export default function HomeScreen({navigation}) {
    return (

      <View style={{ flex: 1, alignItems: 'center'}}>


      <Image
        source = {require('../assets/WuberLogo.png')}
        style = {{width: 350, height: 350}}

      />
      <Button
      title = "Take a Trip" 
      onPress = {() => navigation.navigate('stack')}
      />
      </View>
    );
  }