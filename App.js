import "react-native-gesture-handler";
import React, {Component} from "react";
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { PassengerStack } from "./screens/stacks/PassengerStack.js";
import { DriverStack } from "./screens/stacks/DriverStack.js";
import HomeScreen from "./screens/HomeScreen.js";
import TakeATripScreen from "./screens/TakeATripScreen.js";
import RideListScreen from './screens/RideListScreen.js';
import RideInfoScreen from './screens/RideInfoScreen.js';
import RideRequestSuccessScreen from './screens/RideRequestSuccessScreen.js';
import MyTripsScreen from './screens/MyTripsScreen.jsx';
import SettingsScreen from "./screens/dummies/SettingsScreen.js";
import { ProfileStack } from "./screens/stacks/ProfileStack.js";
import NotificationDisplay from './screens/dummies/NotificationDisplay.js';
import { NotificationsStack } from './screens/stacks/NotificationsStack.js';
import PastTripsScreen from './screens/dummies/PastTripsScreen.js';

/*export default function App() {
  return (
    <>
      <RootNavigator />
    </>
  );
}*/

const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();

function TripStackScreens(){
  return(
    <Stack.Navigator screenOptions={{
      headerTitle: null
    }}>

      <Stack.Screen name="Home" component={HomeScreen} 
        options={{headerShown:false}}
      />
      <Stack.Screen name="Take a Trip" component={TakeATripScreen} />
      <Stack.Screen name="Passenger Stack" component={PassengerStack} />
      <Stack.Screen name="Driver Stack" component={DriverStack} />
      <Stack.Screen name="Ride List" component={RideListScreen} />
      <Stack.Screen name="Ride Details" component={RideInfoScreen} />
      <Stack.Screen name="Ride Requested" component={RideRequestSuccessScreen} 
        options={{headerShown:false}}
      />
    </Stack.Navigator>
  )
}

function ProfileStackScreens(){
  return(
    <Stack.Navigator screenOptions={{
      headerTitle: null
    }}>
    <Stack.Screen name="Profile" component={ProfileStack} 
      options={{headerShown:false}}
    />
    <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  )
}

function NotificationStackScreens(){
  return(
    <Stack.Navigator screenOptions={{
      headerTitle: null
    }}>
    <Stack.Screen name="Notifications Stack" component={NotificationsStack}
      options={{headerShown:false}}
    />
    <Stack.Screen name="Notification Display" component={NotificationDisplay} 
      options={{headerShown:false}}
    />
    </Stack.Navigator>
  )
}

const MyTripsTopTabNavigator = () => (
  <TopTab.Navigator
    tabBarOptions={{
      style: { backgroundColor: "#0041AD" },
      labelStyle: { fontSize: 14, fontWeight: "bold" },
      activeTintColor: "#ffffff",
      indicatorStyle: { height: 3, backgroundColor: "#fff", paddingBottom: 6 },
      inactiveTintColor: "#979A9A",
      tabStyle: { height: 100, right: 5 }
    }}
  >
    <TopTab.Screen component={MyTrip} name="Current Trips" />
    <TopTab.Screen component={PastTripsScreen} name="Past Trips" />
  </TopTab.Navigator>
);


export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
          screenOptions= {({ route }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
              let IconComponent = Ionicons;
              let iconName;
              if (route.name === 'Home') {
                iconName = 'car';
                // Sometimes we want to add badges to some icons.
                // You can check the implementation below.
              } else if (route.name === 'Profile') {
                iconName = 'person-circle';
              } else if (route.name === 'Notifications') {
                iconName = 'location';
              } else if (route.name === 'Trips') {
                iconName = 'map';
              }
      
              // You can return any component that you like here!
              return <IconComponent name={iconName} size={25} color={'#147EFB'} />;
            },
          })
        }
          >
        <BottomTab.Screen  name="Home" component={TripStackScreens} />
        <BottomTab.Screen  name="Trips" component={MyTripsTopTabNavigator} />
        <BottomTab.Screen  name="Notifications" component={NotificationStackScreens} />
        <BottomTab.Screen  name="Profile" component={ProfileStackScreens} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class MyTrip extends Component {
  render(){
    return (
      <MyTripsScreen 
      trips={[
      {
        id: "trip7",
        isDriver: true,
        date: "Tuesday, March 29, 8:00am",
        departure: "Saga-O",
        destination: "Starbucks, Main St.",
      },
      {
        id: "trip8",
        isDriver: false,
        date: "Thursday, March 31, 12:00pm",
        departure: "Smith-Traber Hall",
        destination: "Target",
      },
      {
        id: "trip9",
        isDriver: false,
        date: "Wednesday, April 8, 11:00am",
        departure: "Wheaton College Bookstore",
        destination: "Jewel Osco",
      },
      {
        id: "trip10",
        isDriver: true,
        date: "Tuesday, March 29, 8:00am",
        departure: "Saga-O",
        destination: "Starbucks, Main St.",
      },
      {
        id: "trip11",
        isDriver: false,
        date: "Thursday, March 31, 12:00pm",
        departure: "Smith-Traber Hall",
        destination: "Target",
      },
      {
        id: "trip12",
        isDriver: false,
        date: "Wednesday, April 8, 11:00am",
        departure: "Wheaton College Bookstore",
        destination: "Jewel Osco",
      },
      {
        id: "trip1",
        isDriver: true,
        date: "Tuesday, March 29, 8:00am",
        departure: "Saga-O",
        destination: "Starbucks, Main St.",
      },
      {
        id: "trip2",
        isDriver: false,
        date: "Thursday, March 31, 12:00pm",
        departure: "Smith-Traber Hall",
        destination: "Target",
      },
      {
        id: "trip3",
        isDriver: false,
        date: "Wednesday, April 8, 11:00am",
        departure: "Wheaton College Bookstore",
        destination: "Jewel Osco",
      },
      {
        id: "trip4",
        isDriver: true,
        date: "Tuesday, March 29, 8:00am",
        departure: "Saga-O",
        destination: "Starbucks, Main St.",
      },
      {
        id: "trip5",
        isDriver: false,
        date: "Thursday, March 31, 12:00pm",
        departure: "Smith-Traber Hall",
        destination: "Target",
      },
      {
        id: "trip6",
        isDriver: false,
        date: "Wednesday, April 8, 11:00am",
        departure: "Wheaton College Bookstore",
        destination: "Jewel Osco",
      },
    ]}/>
    );
  }
}