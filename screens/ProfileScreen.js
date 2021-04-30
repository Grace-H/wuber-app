/*
 * ProfileScreen.js
 * 
 * Displays a users profile information and allows for it to be edited. 
 * 
 * Author: Grace Hunter, Gordon Olson, Emily Ray, & Brendan Keefer
 * Date Created: 24 March 21
 * Last Edited: 24 March by Brendan Keefer
 */
import React from 'react';
import { Avatar, Button } from 'react-native-elements';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import stylesCommon from './styles/stylesCommon';

export default function ProfileScreen({ navigation }) {
    return (
        <View style = {stylesCommon.container}>

          <Text style = {stylesCommon.appHeader}>
            Profile
          </Text>

          <Avatar
            rounded
            source = {require('../assets/avatar.jpg')}
            size = {150}
          />

          <ScrollView style = {stylesCommon.scrollView}>
            <Text style = {stylesCommon.textTitle}>
              Name
            </Text>

            <Text style = {stylesCommon.textBod}>
              Wuber Team
            </Text>

            <Text style = {stylesCommon.textTitle}>
              Email
            </Text>

            <Text style = {stylesCommon.textBod}>
              test.email@wuber.org
            </Text>

            <Text style = {stylesCommon.textTitle}>
              Graduating Year
            </Text>

            <Text style = {stylesCommon.textBod}>
              Various
            </Text>

          </ScrollView>

            <TouchableOpacity 
              style = {stylesCommon.customBtnBG}
              onPress = {() => {navigation.navigate('Settings')}}>
              <Text style={stylesCommon.customBtnTextWhite}>
                Edit
              </Text>
            </TouchableOpacity>

            <Text>
              {"\n"}{"\n"}{"\n"}            
            </Text>

            <TouchableOpacity
              style = {stylesCommon.customBtnBG}
              onPress = {() => {navigation.navigate('Login')}}>
              <Text style={stylesCommon.customBtnTextWhite}>
                Logout
              </Text>
              
            </TouchableOpacity>

            

            <Text>
              {"\n"}
            </Text>

        </View>
    )
}
