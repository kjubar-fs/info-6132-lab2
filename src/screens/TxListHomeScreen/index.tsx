/*
 *  Author: Kaleb Jubar
 *  Created: 29 Oct 2024, 4:00:03 PM
 *  Last update: 29 Oct 2024, 4:01:12 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { View, Text } from "react-native";

import TransactionList from "../../components/transactions/TransactionList";

import styles from "./styles";

export default function TxListHomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Transactions</Text>
            <TransactionList />
        </View>
    );
}