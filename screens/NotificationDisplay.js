/*
 * NotificationDisplay.js
 * 
 * The screen that will present a specific notification or message to a user.
 * 
 * Author: Gordon Olson, Grace Hunter, Emily Ray, & Brendan Keefer
 * Date Created: 05 March 21 
 * Last Edited: 24 March Brendan
 */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import stylesCommon from './styles/stylesCommon';

export default function Notifications ({ navigation }) {

    return(
    <View style = {stylesCommon.container}>
        <Text style = {stylesCommon.textBod}>
            Dear User, 
        </Text>

        <Text>
              {"\n"}
        </Text>

        <Text style = {stylesCommon.textBod}>
            We regret to inform you that this application is not yet operational.
            {"\n"}
            We hope to have it up and running in now more than 5 weeks.
            {"\n"}
            Sincerely,
            {"\n"}
            The Wuber Team
        </Text>
        <Text>
            {"\n"}
        </Text>
        <TouchableOpacity 
            style = {stylesCommon.customBtnSM}
            onPress = {() => {navigation.navigate('stack')}}>
            <Text style={stylesCommon.customBtnTextWhiteSM}>
                Go Home
            </Text>
      </TouchableOpacity>

    </View>
    );
}