/*
 * MyTripScreen.jsx
 * Displays a list of trip objects as a series of Touchable RegisteredTripCard
 * 
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
/*
 * Takes trip data of format
 * [{
 *   id: String
 *   isDriver: boolean
 *   date: String
 *   departure: String
 *   destination: String
 * },]
 */
class MyTripsScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            trips: [],
            userid: "606cd4960520b9ce1ac31c5b",
        }
    }

    getTrips() {
        axios.get('http://localhost:5000/trips')
            .then(response => {
                if(response.data.length > 0) {
                    this.setState({
                        trips: response.data
                    });
                }
            })
            .catch(err => console.log(err));
        console.log(this.state.trips);
        console.log(this.state.user);
        return this.state.trips;
    }

    render() { 
        return (  
            <SafeAreaView>
                <FlatList
                    data={this.getTrips()}
                    renderItem={({item}) => (
                        <TouchableOpacity
                            key={item._id}
                            >
                            <RegisteredTripCard
                                isDriver={item.driver == this.state.userid}
                                date={item.time}
                                destination={item.destination}
                                departure={item.origin}
                            />
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={<Text>"Trips you have joined will appear here.</Text>}
                />
            </SafeAreaView>
        );
    }
}
 
export default MyTripsScreen;