/*
 *  Author: Kaleb Jubar
 *  Created: 29 Oct 2024, 4:05:16 PM
 *  Last update: 30 Oct 2024, 12:16:27 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { View, Text } from "react-native";

import { useRoute } from "@react-navigation/native";

import { isTransaction, Transaction } from "../../data/context/transactions";

import styles from "./styles";
import { formatDate, negativeColor, numFormatter, positiveColor } from "../../util/constants";

export default function TxDetailScreen() {
    const route = useRoute();
    if (!route || !route.params || !isTransaction(route.params as Transaction)) {
        return (
            <View style={styles.error}>
                <Text style={styles.errorText}>No transaction found!</Text>
            </View>
        );
    }

    const tx = route.params as Transaction;

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{tx.name}</Text>
                <Text style={styles.subtitle}>{formatDate(new Date(tx.date))}</Text>
            </View>

            <View>
                <Text
                    style={[
                        styles.amountText,
                        { color: tx.value > 0 ? positiveColor : negativeColor },
                    ]}
                >{numFormatter.format(tx.value)}</Text>
            </View>

            <View style={styles.keyValueContainer}>
                <Text style={[styles.kvText, styles.key]}>Sender:</Text>
                <Text style={styles.kvText}>{tx.sender}</Text>
            </View>

            <View style={styles.keyValueContainer}>
                <Text style={[styles.kvText, styles.key]}>Destination:</Text>
                <Text style={styles.kvText}>{tx.destination}</Text>
            </View>

            {tx.description !== undefined &&
            <View style={styles.titleContainer}>
                <Text style={[styles.kvText, styles.key]}>Additional Information:</Text>
                <Text style={styles.kvText}>{tx.description}</Text>
            </View>}
        </View>
    );
}