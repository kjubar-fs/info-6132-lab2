/*
 *  Author: Kaleb Jubar
 *  Created: 26 Oct 1985, 4:15:00 AM
 *  Last update: 28 Oct 2024, 4:07:32 PM
 *  Copyright (c) 1985 - 2024 Kaleb Jubar
 */
import { StyleSheet, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './src/screens/HomeScreen';

import { primaryColor } from './src/util/constants';

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="light" />

            <View style={styles.container}>
                <HomeScreen />
            </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primaryColor,
    },
});