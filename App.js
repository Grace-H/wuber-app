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
import LoginStack from "./screens/stacks/LoginStack.js";
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
import ChatScreen from "./screens/ChatScreen";
import Messages from "./screens/Messages";

const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();

class TripStackScreens extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passSearchQuery: null,
      selectedTrip: null,
    };
  }

  getPassSearchQuery = () => {
    return this.state.passSearchQuery;
  };

  setSelectedTrip = (trip) => {
    this.setState({ selectedTrip: trip });
  };

  setPassSearchQuery = (newQuery) => {
    this.setState({ passSearchQuery: newQuery });
  };

  getSelectedTrip = () => {
    return this.state.selectedTrip;
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
              setSelectedTrip={this.setSelectedTrip}
            />
          )}
        />
        <Stack.Screen
          name="Ride Details"
          children={() => (
            <RideInfoScreen
              getSelectedTrip={this.getSelectedTrip}
              navigation={this.props.navigation}
            />
          )}
        />
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
 *
 */
function LoginStackScreens() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: null,
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Sign Up"
        component={SignUp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const BottomTabNavigator = () => {
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
        return <IconComponent name={iconName} size={25} color={"#147EFB"} />;
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
  </BottomTab.Navigator>;
};

class MyTripsTopTabNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTrip: null,
    };
  }

  setSelectedTrip = (trip) => {
    this.setState({ selectedTrip: trip });
  };

  getSelectedTrip = () => {
    return this.state.selectedTrip;
  };

  render() {
    return (
      <TopTab.Navigator
        tabBarOptions={{
          style: { backgroundColor: "#0041AD" },
          labelStyle: { fontSize: 14, fontWeight: "bold" },
          activeTintColor: "#ffffff",
          indicatorStyle: {
            height: 3,
            backgroundColor: "#fff",
            paddingBottom: 6,
          },
          inactiveTintColor: "#979A9A",
          tabStyle: { height: 100, right: 5 },
        }}
      >
        <TopTab.Screen
          children={() => (
            <Stack.Navigator>
              <Stack.Screen
                name="My Trips"
                children={() => (
                  <MyTripsScreen
                    setSelectedTrip={this.setSelectedTrip}
                    navigation={this.props.navigation}
                  />
                )}
                options={{ headerShown: true }}
              />

              <Stack.Screen
                name="Trip Details"
                children={() => (
                  <MyTripInfoScreen
                    getSelectedTrip={this.getSelectedTrip}
                    navigation={this.props.navigation}
                  />
                )}
                options={{ headerShown: true }}
              />
            </Stack.Navigator>
          )}
          name="Current Trips"
        />
        <TopTab.Screen component={PastTripsScreen} name="Past Trips" />
      </TopTab.Navigator>
    );
  }
}

function MessagesStackScreens() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: null,
      }}
    >
      <Stack.Screen
        name="Messages"
        component={Messages}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  )
}


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
      <SignUp />
*/
      /*
      <LoginScreen setUser= {this.setUser} />
      */
      /*


      
      <SignUp/>
      */

      //<LoginScreen navigation={this.props.navigation} />

      //Working on trying to connect the login and create account screens.
      <NavigationContainer>
        <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Sign Up"
        component={SignUp}
        options={{ headerShown: false }}
      />
          <Stack.Screen
          name = "App"
          component = {BottomTabNavigator}/>
        </Stack.Navigator>

      </NavigationContainer>
      /*
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
              } else if (route.name === "Chat") {
                iconName= "chatbox-ellipses";
              }

              // You can return any component that you like here!
              return (
                <IconComponent name={iconName} size={25} color={"#147EFB"} />
              );
            },
          })}
        >
          <BottomTab.Screen 
            name="Home" 
            component={TripStackScreens} 
          />
          <BottomTab.Screen 
            name="Trips" 
              component={MyTripsTopTabNavigator} 
          />
          <BottomTab.Screen 
            name="Chat" 
            component={ChatScreen} 
          />
          <BottomTab.Screen
            name="Notifications"
            component={NotificationStackScreens}
          />
          <BottomTab.Screen name="Profile" component={ProfileStackScreens} />
        </BottomTab.Navigator>
      </NavigationContainer>
      */
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
