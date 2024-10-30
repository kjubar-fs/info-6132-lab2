/*
 *  Author: Kaleb Jubar
 *  Created: 29 Oct 2024, 4:05:16 PM
 *  Last update: 30 Oct 2024, 11:51:05 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { View, Text } from "react-native";

import { useRoute } from "@react-navigation/native";

import { isTransaction, Transaction } from "../../data/context/transactions";

import styles from "./styles";

export default function TxDetailScreen() {
    const route = useRoute();
    if (!route || !route.params || !isTransaction(route.params as Transaction)) {
        return (
            <View style={styles.error}>
                <Text style={styles.errorText}>No transaction found!</Text>
            </View>
        )
    }

    return (
        <View>
            <Text>Transaction details</Text>
        </View>
    );
}