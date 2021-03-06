/*
 * MyTripScreen.jsx
 * Displays a list of trip objects that the user is a passenger on
 * as a series of Touchable RegisteredTripCard
 *
 * Author: Grace Hunter
 * Date: 24 March 2021
 * Last Modified: 8 apr Grace
 */

import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Text, SafeAreaView } from 'react-native';
import RegisteredTripCard from '../components/RegisteredTripCard.jsx';
import axios from 'axios';

class MyRidesScreen extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            trips: [],
            userid: "606cd4960520b9ce1ac31c5b",
        }
    }

    formatTime(t) {
        const daysOftheWeek = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        const monthsOftheYear = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
    
        const time = new Date(t);
    
        return (
          daysOftheWeek[time.getUTCDay()] +
          ", " +
          monthsOftheYear[time.getUTCMonth() + 1] +
          " " +
          time.getUTCDate() +
          ", " +
          (time.getUTCHours() - 12 <= 0 ? time.getUTCHours() : time.getUTCHours() - 12) +
          ":" +
          (time.getUTCMinutes() < 10 ? "" + time.getUTCMinutes() : "") +
          time.getUTCMinutes() +
          " " +
          (time.getUTCHours() - 12 <= 0 ? "AM" : "PM")
        );
    }

    getTrips() {
        axios({
            method: "get",
            url: "http://localhost:5000/trips/searchbypassenger",
            params: {
              userid: this.state.userid
            },
          })
            .then((response) => {
              if (response.data.length > 0) {
                this.setState({
                  trips: response.data,
                });
              } else {
                console.log("No Trips found.");
                this.setState({
                  trips: [],
                });
              }
            })
            .catch((err) => console.log("Didn't work: " + err));
          return this.state.trips;
      
    }

    render() { 
        return (  
            <SafeAreaView>
                <FlatList
                    data={this.getTrips()}
                    renderItem={({item}) => (
                        <TouchableOpacity
                        onPress={() => {
                            this.props.setSelectedTrip(item);
                            this.props.navigation.navigate("Ride Details");
                          }}
                            key={item._id}
                            >
                            <RegisteredTripCard
                                isDriver={item.driver == this.state.userid}
                                date={this.formatTime(item.time)}
                                destination={item.destination.substring(16, item.destination.indexOf(','))}
                                departure={item.origin.substring(16, item.origin.indexOf(','))}
                                driverBadge={true}
                            />
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={<Text>Trips you have joined will appear here.</Text>}
                />
            </SafeAreaView>
        );
    }
}
 
export default MyRidesScreen;