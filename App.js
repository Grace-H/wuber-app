import "react-native-gesture-handler";
import React, { Component, TextInput, Button, render, Alert } from "react";
import { Avatar } from "react-native-elements";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "react-navigation";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { PassengerStack } from "./screens/stacks/PassengerStack.js";
import { DriverStack } from "./screens/stacks/DriverStack.js";
import HomeScreen from "./screens/HomeScreen.js";
import TakeATripScreen from "./screens/TakeATripScreen.js";
import RideListScreen from "./screens/RideListScreen.js";
import MyTripInfoScreen from "./screens/MyTripInfoScreen";
import RideInfoScreen from "./screens/RideInfoScreen.js";
import RideRequestSuccessScreen from "./screens/RideRequestSuccessScreen.js";
import MyTripsScreen from "./screens/MyTripsScreen.jsx";
import SettingsScreen from "./screens/dummies/SettingsScreen.js";
import { ProfileStack } from "./screens/stacks/ProfileStack.js";
import NotificationDisplay from "./screens/dummies/NotificationDisplay.js";
import { NotificationsStack } from "./screens/stacks/NotificationsStack.js";
import PastTripsScreen from "./screens/dummies/PastTripsScreen.js";
import LoginScreen from "./screens/LoginScreen";
import SignUp from "./screens/SignUp";

const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();

class TripStackScreens extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTrip: null,
      passSearchQuery: null,
    };
  }

  getPassSearchQuery = () => {
    console.log("Returning: ");
    console.log(this.state.passSearchQuery);
    return this.state.passSearchQuery;
  };

  setPassSearchQuery = (newQuery) => {
    this.setState({ passSearchQuery: newQuery });
  };

  getSelectedTrip = () => {
    return this.state.selectedTrip;
  };
  setSelectedTrip = (trip) => {
    this.setState({ selectedTrip: trip });
  };

  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerTitle: null,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Take a Trip" component={TakeATripScreen} />
        <Stack.Screen
          name="Passenger Stack"
          children={() => (
            <PassengerStack setPassSearchQuery={this.setPassSearchQuery} />
          )}
        />
        <Stack.Screen name="Driver Stack" children={() => <DriverStack />} />
        <Stack.Screen
          name="Ride List"
          children={() => (
            <RideListScreen
              getQuery={this.getPassSearchQuery}
              navigation={this.props.navigation}
            />
          )}
        />
        <Stack.Screen name="Ride Details" component={RideInfoScreen} />
        <Stack.Screen
          name="Ride Requested"
          component={RideRequestSuccessScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
}

function ProfileStackScreens() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: null,
      }}
    >
      <Stack.Screen
        name="Profile"
        component={ProfileStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

function NotificationStackScreens() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: null,
      }}
    >
      <Stack.Screen
        name="Notifications Stack"
        component={NotificationsStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notification Display"
        component={NotificationDisplay}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

/*
 * My hope is to use this as the navigator between
 * the login and create account pages.
 * I am following instructions on this from the link below.
 * This will help with authentication.
 * https://medium.com/the-react-native-log/building-an-authentication-flow-with-react-navigation-fb5de2203b5c
 */
/*
function LoginStackScreens(){
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle = null, 
      }}
    >
      <Stack.Screen
      name=
      component/>
      <Stack.Screen/>


    </Stack.Navigator>

  )

}
*/

const MyTripsTopTabNavigator = () => (
  <TopTab.Navigator
    tabBarOptions={{
      style: { backgroundColor: "#0041AD" },
      labelStyle: { fontSize: 14, fontWeight: "bold" },
      activeTintColor: "#ffffff",
      indicatorStyle: { height: 3, backgroundColor: "#fff", paddingBottom: 6 },
      inactiveTintColor: "#979A9A",
      tabStyle: { height: 100, right: 5 },
    }}
  >
    <TopTab.Screen component={MyTrip} name="Current Trips" />
    <TopTab.Screen component={PastTripsScreen} name="Past Trips" />
  </TopTab.Navigator>
);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  getUser() {
    return this.state.user;
  }

  setUser(newUser) {
    this.setState({ user: newUser });
  }

  render() {
    return (
      /*
      <LoginScreen />
      */

      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
              let IconComponent = Ionicons;
              let iconName;
              if (route.name === "Home") {
                iconName = "car";
                // Sometimes we want to add badges to some icons.
                // You can check the implementation below.
              } else if (route.name === "Profile") {
                iconName = "person-circle";
              } else if (route.name === "Notifications") {
                iconName = "location";
              } else if (route.name === "Trips") {
                iconName = "map";
              }

              // You can return any component that you like here!
              return (
                <IconComponent name={iconName} size={25} color={"#147EFB"} />
              );
            },
          })}
        >
          <BottomTab.Screen name="Home" component={TripStackScreens} />
          <BottomTab.Screen name="Trips" component={MyTripsTopTabNavigator} />
          <BottomTab.Screen
            name="Notifications"
            component={NotificationStackScreens}
          />
          <BottomTab.Screen name="Profile" component={ProfileStackScreens} />
        </BottomTab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

class MyTrip extends Component {
  render() {
    return <MyTripsScreen />;
  }
}
