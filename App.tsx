/*
 *  Author: Kaleb Jubar
 *  Created: 26 Oct 1985, 4:15:00 AM
 *  Last update: 28 Oct 2024, 3:49:04 PM
 *  Copyright (c) 1985 - 2024 Kaleb Jubar
 */
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="auto" />

            <HomeScreen />
        </NavigationContainer>
    );
}
