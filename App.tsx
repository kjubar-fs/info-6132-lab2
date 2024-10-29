/*
 *  Author: Kaleb Jubar
 *  Created: 26 Oct 1985, 4:15:00 AM
 *  Last update: 29 Oct 2024, 3:29:25 PM
 *  Copyright (c) 1985 - 2024 Kaleb Jubar
 */
import { StyleSheet, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';

import { TransactionsProvider } from './src/data/context/transactions';
import transactions from "./src/data/mock/transactions.json";
import { BalanceHistoryProvider } from './src/data/context/balanceHistory';
import balanceHistory from "./src/data/mock/balanceHistory.json";

import HomeScreen from './src/screens/HomeScreen';

import { primaryColor } from './src/util/constants';

export default function App() {
    return (
        <NavigationContainer>
            <TransactionsProvider txList={transactions}>
            <BalanceHistoryProvider balanceList={balanceHistory}>

            <StatusBar style="light" />

            <View style={styles.container}>
                <HomeScreen />
            </View>

            </BalanceHistoryProvider>
            </TransactionsProvider>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primaryColor,
    },
});