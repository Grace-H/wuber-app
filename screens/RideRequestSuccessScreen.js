/*
 * RideRequestSuccessScreen.js
 * Lets a user know that they have successfully requested to join a 
 * ride and presents other options. 
 * 
 * Author: Grace Hunter, Gordon Olsen, Emily Ray, & Brendan Keefer
 * Date Created: 05 March 21
 * Last Edited: 21 March 21 by Brendan Keefer
 */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import stylesCommon from './styles/stylesCommon';
export default function RideRequestSuccessScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Avatar
          source = {require('../assets/WuberLogo.png')}
          size = {200}
        />
        <Text style = {stylesCommon.textTitle}
            >You have successfully requested
            to join this trip!
        </Text>
        <Text>
          {"\n"}
        </Text>
        <Text style = {stylesCommon.textSub}
            >Would you like to join another trip?
        </Text>
        <Text>
          {"\n"}
        </Text>
        <TouchableOpacity 
        style = {stylesCommon.customBtnSM}
        onPress = {() => {navigation.navigate('Find a Ride')}}>
          <Text style={stylesCommon.customBtnTextWhite}>
            Yes
          </Text>
        </TouchableOpacity>
        <Text> 
          {"\n"}
        </Text>
        <TouchableOpacity 
        style = {stylesCommon.customBtnSM}
        onPress = {() => {navigation.navigate('Home')}}>
          <Text style={stylesCommon.customBtnTextWhite}>
          No
          </Text>
        </TouchableOpacity>
      </View>
    )
  }