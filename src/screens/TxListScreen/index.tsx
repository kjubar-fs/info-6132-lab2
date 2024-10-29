/*
 *  Author: Kaleb Jubar
 *  Created: 28 Oct 2024, 3:50:14 PM
 *  Last update: 29 Oct 2024, 3:41:09 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { View, Text } from "react-native";

import TransactionList from "../../components/transactions/TransactionList";

import styles from "./styles";

export default function TxListScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Transactions</Text>
            <TransactionList />
        </View>
    );
}