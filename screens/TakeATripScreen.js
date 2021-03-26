import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import Layout from '../components/Layout.js';


export default function HomeScreen({navigation}) {
    return (
  
      /* (Grace) Playground for testing screen with lists of rides user is signed up for
      until menu is connected
  
      <SafeAreaView>
        <RegisteredTripCard 
          isDriver={true}
          date={"Tuesday, March 3, 4:00pm"}
          departure={"College Ave Apartments"}
          destination={"O'Hare Int'l Airport"}
        />
        <RegisteredTripCard 
          isDriver={false}
          date={"Wednesday, March 16, 12:00pm"}
          departure={"Meyer Science Center"}
          destination={"Starbucks"}
        />
        <RegisteredTripCard 
          isDriver={true}
          date={"Saturday, March 31, 8:00am"}
          departure={"Wheaton College Bookstore"}
          destination={"Starbucks"}
        />
      </SafeAreaView>
      */
      
<>
      <Layout />

      <View style={{ flex: 1, alignItems: 'center'}}>


      <Image
        source = {require('../assets/WuberLogo.png')}
        style = {{width: 350, height: 350}}

      />
        
      <Text style={{}}> What do you want to do today?</Text>
      <Text>
              {"\n"}
            </Text>
      <Button
      title = "Find a Ride" 
      onPress = {() => navigation.navigate('Find a Ride')}
      />
                  <Text>
              {"\n"}
            </Text>
      <Button
      title = "Offer a Ride"
      onPress = {() => navigation.navigate('Offer a Ride')}
      />
      </View>

      </>
    );
  }