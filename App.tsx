/*
 *  Author: Kaleb Jubar
 *  Created: 26 Oct 1985, 4:15:00 AM
 *  Last update: 30 Oct 2024, 12:31:13 PM
 *  Copyright (c) 1985 - 2024 Kaleb Jubar
 */
import { StyleSheet, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import { TransactionsProvider } from './src/data/context/transactions';
import transactions from "./src/data/mock/transactions.json";
import { BalanceHistoryProvider } from './src/data/context/balanceHistory';
import balanceHistory from "./src/data/mock/balanceHistory.json";
import { AccountDetailsProvider } from './src/data/context/accountDetails';
import accountDetails from "./src/data/mock/accountDetails.json";

import HomeScreen from './src/screens/HomeScreen';

import { primaryColor, secondaryColor, white } from './src/util/constants';

const BankTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: secondaryColor,
        background: white,
    },
};

export default function App() {
    return (
        <NavigationContainer theme={BankTheme}>
            <TransactionsProvider txList={transactions}>
            <BalanceHistoryProvider balanceList={balanceHistory}>
            <AccountDetailsProvider acctDetails={accountDetails}>

            <StatusBar style="light" />

            <View style={styles.container}>
                <HomeScreen />
            </View>

            </AccountDetailsProvider>
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