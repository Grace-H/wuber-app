import React from "react";
import { View, StyleSheet, Text } from "react-native";
import stylesCommon from './styles/stylesCommon';

const NotificationsScreen = ({navigation}) => {
  return (
    <View style={stylesCommon.container}>
      <Text style = {stylesCommon.appHeader}>
        Notifications
      </Text>
      <Text>This is the Notifications screen</Text>
    </View>
  );
};

export default NotificationsScreen;