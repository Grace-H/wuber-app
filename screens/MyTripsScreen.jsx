/*
 * MyTripScreen.jsx
 * Displays a list of trip objects as a series of Touchable RegisteredTripCard
 * 
 *
 * Author: Grace Hunter
 * Date: 24 March 2021
 * Last Modified: 24 mar Grace
 */

import Realm from "realm";
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Text, SafeAreaView } from 'react-native';
import RegisteredTripCard from '../components/RegisteredTripCard.jsx';

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

    render() { 
        return (  
            <SafeAreaView>
                <FlatList
                    data={this.props.trips}
                    renderItem={({item}) => (
                        <TouchableOpacity
                            key={item.id}
                            >
                            <RegisteredTripCard
                                isDriver={item.isDriver}
                                date={item.date}
                                destination={item.destination}
                                departure={item.departure}
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