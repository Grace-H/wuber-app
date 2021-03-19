// RideInfoScreen.js
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import stylesCommon from './Styles/stylesCommon';

export default function RideInfoScreen({ navigation }) {
    return (
        <View style = {stylesCommon.container}>

          <Text style = {stylesCommon.appHeader}>
            Wuber
          </Text>

          <ScrollView style = {stylesCommon.scrollView}>
            <Text style = {stylesCommon.textTitle}>
              Destination
            </Text>

            <Text style = {stylesCommon.textBod}>
              Starbucks
            </Text>

            <Text style = {stylesCommon.textTitle}>
              Date
            </Text>

            <Text style = {stylesCommon.textBod}>
              March 6, 2021
            </Text>

            <Text style = {stylesCommon.textTitle}>
              Time
            </Text>

            <Text style = {stylesCommon.textBod}>
              2:15 PM
            </Text>

            <Text style = {stylesCommon.textTitle}>
              Payment
            </Text>

            <Text style = {stylesCommon.textBod}>
              $2.00
            </Text>

            <Text style = {stylesCommon.textTitle}>
              Round Trip
            </Text>

            <Text style = {stylesCommon.textBod}>
              Yes
            </Text>

            <Text style = {stylesCommon.textTitle}>
              Time at Destination
            </Text>

            <Text style = {stylesCommon.textBod}>
              30 Min
            </Text>
          </ScrollView>

            <TouchableOpacity 
            style = {stylesCommon.customBtnBG}
            onPress = {() => {navigation.navigate('Success!')}}>
              <Text style={stylesCommon.customBtnTextWhite}>
                Join Ride 
              </Text>
            </TouchableOpacity>

            <Text>
              {"\n"}
            </Text>

            <TouchableOpacity 
            style = {stylesCommon.customBtnBG}
            onPress = {() => {navigation.navigate('Rides')}}>
              <Text style={stylesCommon.customBtnTextWhite}>
                Back
              </Text>
            </TouchableOpacity>

            <Text>
              {"\n"}
            </Text>

        </View>
    )
}