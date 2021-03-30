import React from 'react';
import { View, Text } from 'react-native';
import stylesCommon from './styles/stylesCommon';

export default function SettingsScreen({ navigation }) {
    return (
        <View style = {stylesCommon.container}>
            <Text>
                This is the Settings screen.
            </Text>
        </View>
    )
}
