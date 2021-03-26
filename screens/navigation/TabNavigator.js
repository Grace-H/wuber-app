import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";

import ProfileScreen from "../ProfileScreen.js";
import NotificationsScreen from "../Notifications.js";
import MyTripsScreen from "../MyTripsScreen.jsx";
import TakeATripScreen from "../HomeScreen.js";

const BottomTab = createMaterialBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const ProfileScreenTopTabNavigator = () => (
    <TopTab.Navigator
      initialRouteName="settings"
      tabBarOptions={{
        style: { backgroundColor: "#0041AD" },
        labelStyle: { fontSize: 14, fontWeight: "bold" },
        activeTintColor: "#ffffff",
        indicatorStyle: { height: 3, backgroundColor: "#fff", paddingBottom: 6 },
        inactiveTintColor: "#979A9A",
        tabStyle: { height: 100, right: 5 }
      }}
    >
      <TopTab.Screen component={ProfileScreen} name="Settings" />
    </TopTab.Navigator>
  );
  
const AllScreenTabNavigator = () => (
    <BottomTab.Navigator
      initialRouteName="tab"
      screenOptions={{
        tabBarColor: "#0041AD"
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={TakeATripScreen}
        options={{
          tabBarIcon: () => <Icon name="book-open" size={25} color="#fff" />
        }}
      />
      <BottomTab.Screen
        name="My Trips"
        component={MyTripsScreen}
        options={{
          tabBarIcon: () => <Icon name="file-alt" size={25} color="#fff" />
        }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarIcon: () => <Icon name="comment-alt" size={25} color="#fff" />
        }}
      />
      <BottomTab.Screen
        name="Profile"
        children={ProfileScreenTopTabNavigator}
        options={{
          tabBarIcon: () => <Icon name="user" size={25} color="#fff" />
        }}
      />
    </BottomTab.Navigator>
  );
  
  export { AllScreenTabNavigator };