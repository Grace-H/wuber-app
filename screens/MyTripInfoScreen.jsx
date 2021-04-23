/*
 * MyTripInfoScreen.jsx
 * React Native component that displays a trip object's information 
 * to the user and allows them to approve or deny passengers.
 * Renders dynamically based on whether user is driver or not
 * 
 * Author: Grace Hunter
 * Date: 24 March 2021
 * last modified: 24 mar Grace
 */


import React, {Component} from 'react';
import { SafeAreaView, Text, ScrollView, StyleSheet, View } from 'react-native';
import { Icon, ListItem, Avatar } from 'react-native-elements';
import axios from 'axios';

 class MyTripInfoScreen extends Component {
     constructor(props){
         super(props);
         this.state = {
             userid: "606cd4960520b9ce1ac31c5b",
         }
    }

    getDriverName = () => {
        const userid = "606cd4960520b9ce1ac31c5b";
        let username = "Driver not found."
        axios.get('http://localhost:5000/users/findbyid/' + userid)
            .then(res => {
                username = res.data.name;
            })
            .catch(err => console.log("Error: " + err));
        return username;
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

     render() { 
         const trip = this.props.getSelectedTrip();

         return (
             <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.dateTitle}>{this.formatTime(trip.time)}</Text>
                    {trip.isRoundTrip && <Text style={{fontSize: 24, color: "#147EFB"}}>Return Time: {this.formatTime(trip.returnTime)}</Text>}
                    <View style={styles.destination}>
                        <View>
                            <Text style={styles.destination}>
                                From: {trip.origin}
                            </Text >
                            <Text style={styles.destination}>
                                To: {trip.destination}
                            </Text>
                        </View>
                        <Icon 
                            name='map-marker'
                            type='font-awesome'
                            style={styles.destination}
                            size="50x"
                        />
                    </View>
                    <Text style={{fontSize: 24, marginVertical: 8}}>Fee: $3.50</Text>  
                    <Text style={{fontSize: 24, marginVertical: 8}}>
                        Driver
                    </Text>
                    <ListItem bottomDivider topDivider>
                        <Avatar source={require('../assets/blank-profile-picture.png')} />
                        <ListItem.Content>
                        <ListItem.Title>{this.getDriverName()}</ListItem.Title>
                        </ListItem.Content>
                        {/*trip.driver != this.state.userid &&
                        //icon causing error: Warning: Failed prop type: Invalid prop `fontSize` of type `string` supplied to `Text`, expected `number`.
Bad object: {
  "fontSize": "30x",
  "color": "red",
  "backgroundColor": "transparent",
  "fontFamily": "FontAwesome",
  "fontWeight": "normal",
  "fontStyle": "normal"
}

                        <ListItem.Chevron 
                            name='comment-o'
                            type='font-awesome'
                            size='25x'
                            color="grey"
                        />
                        */}
                        
                    </ListItem>
                    <Text style={{fontSize: 24, marginVertical: 8}}>
                        Passengers
                    </Text>
                    <ListItem bottomDivider topDivider>
                        <Avatar source={require('../assets/blank-profile-picture.png')} />
                        <ListItem.Content>
                        <ListItem.Title>Rebecca Johnson</ListItem.Title>
                        </ListItem.Content>
                  
                    
                    </ListItem>
                    <ListItem bottomDivider topDivider>
                        <Avatar source={require('../assets/blank-profile-picture.png')} />
                        <ListItem.Content>
                        <ListItem.Title>Samuel Smith</ListItem.Title>
                        </ListItem.Content>
                        
                     
                    
                    </ListItem>
                    <ListItem bottomDivider topDivider>
                        <Avatar source={require('../assets/blank-profile-picture.png')} />
                        <ListItem.Content>
                        <ListItem.Title>John Huntington</ListItem.Title>
                        </ListItem.Content>
                        
                    
                    </ListItem>
                </ScrollView>
             </SafeAreaView>
         );
     }
 }
  
 /*
                        <ListItem.Chevron 
                            name='comment-o'
                            type='font-awesome'
                            size='25x'
                            color="grey"
                        />
                        {trip.driver == this.state.userid && 
                            <ListItem.Chevron 
                                name='check'
                                type='font-awesome'
                                size='30x'
                                color="green"
                            />
                        }
                        {trip.driver == this.state.userid &&
                            <ListItem.Chevron 
                                name='times'
                                type='font-awesome'
                                size='30x'
                                color="red"
                            />
                        }
                        */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    scrollView: {
        marginHorizontal: 10,
    },
    dateTitle: {
        fontWeight: "bold",
        fontSize: 48,
        color: "#EE8A22",
    },
    destination: {
        flexDirection:  "row",
        justifyContent: 'space-between',
        fontSize: 20,
        alignItems: "center",
        marginVertical: 8
    },
})
 export default MyTripInfoScreen;