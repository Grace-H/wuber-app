import React from 'react';
import { View, Text } from 'react-native';
import stylesCommon from './styles/stylesCommon';

export default function PastTripsScreen({ navigation }) {
    return (
        <View style = {stylesCommon.container}>
            <Text>
                These are your Past Trips.
            </Text>
        </View>
    )
}