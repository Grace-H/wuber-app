/*
 * OfferRideSuccessScreen.js
 * Lets a user know that they have successfully created the offered ride.
 * 
 * Author: Grace Hunter, Gordon Olson, Emily Ray, & Brendan Keefer
 * Date Created: 27 April 21 by Gordon Olson
 */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import stylesCommon from './styles/stylesCommon';
export default function OfferRideSuccessScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Avatar
          source = {require('../assets/WuberLogo.png')}
          size = {200}
        />
        <Text style = {stylesCommon.textTitle}
            >You have successfully offered this trip!
        </Text>
        <Text>
          {"\n"}
        </Text>
        <Text style = {stylesCommon.textSub}
            >Would you like to create another trip?
        </Text>
        <Text>
          {"\n"}
        </Text>
        <TouchableOpacity 
        style = {stylesCommon.customBtnSM}
        onPress = {() => {navigation.navigate('Driver Stack')}}>
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