/*
 *  Author: Kaleb Jubar
 *  Created: 29 Oct 2024, 4:05:16 PM
 *  Last update: 30 Oct 2024, 11:33:14 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { View, Text } from "react-native";

import { useRoute } from "@react-navigation/native";

import styles from "./styles";

export default function TxDetailScreen() {
    const route = useRoute();
    console.log(route);
    if (!route || !route.params) {
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