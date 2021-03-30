import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import stylesCommon from './styles/stylesCommon';

export default function HomeScreen({navigation}) {
    return (

      <View style={{ flex: 1, alignItems: 'center' }}>

        <Text>
          {"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}
        </Text>

        <Avatar
          source = {require('../assets/WuberLogo.png')}
          size = {200}
        />

        <Text>
          {"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}
        </Text>

        <TouchableOpacity 
          style = {stylesCommon.customBtn}
          onPress = {() => {navigation.navigate('Take a Trip')}}>
          <Text style={stylesCommon.customBtnTextWhite}>
            Take a Trip!
          </Text>
        </TouchableOpacity>
      </View>
    );
  }