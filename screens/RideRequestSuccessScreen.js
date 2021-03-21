/*
 * RideRequestSuccessScreen.js
 * Lets a user know that they have successfully requested to join a 
 * ride and presents other options. 
 * 
 * Author: Grace Hunter, Gordon Olsen, Emily Ray, & Brendan Keefer
 * Date Created: 05 March 21
 * Last Edited: 21 March 21 by Brendan Keefer
 */
import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import stylesCommon from './styles/stylesCommon';
export default class Homescreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style = {stylesCommon.appHeader}>
        Wuber
        </Text>
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
        onPress = {() => {this.props.navigation.navigate('Find a Ride')}}>
          <Text style={stylesCommon.customBtnTextWhite}>
            Yes
          </Text>
        </TouchableOpacity>
        <Text> 
          {"\n"}
        </Text>
        <TouchableOpacity 
        style = {stylesCommon.customBtnSM}
        onPress={() => alert('This will take you Home')}>
          <Text style={stylesCommon.customBtnTextWhite}>
          No
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}