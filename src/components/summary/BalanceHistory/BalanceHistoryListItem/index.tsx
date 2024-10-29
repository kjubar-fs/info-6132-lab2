/*
 *  Author: Kaleb Jubar
 *  Created: 29 Oct 2024, 1:09:28 PM
 *  Last update: 29 Oct 2024, 3:23:38 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { View, Text } from "react-native";

import { formatDate, numFormatter } from "../../../../util/constants";
import styles from "./styles";

interface BalanceHistoryListItemProps {
    value: number,
    date: Date
}

export default function BalanceHistoryListItem({ value, date }: BalanceHistoryListItemProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.balance}>{numFormatter.format(value)}</Text>
            <Text>{formatDate(date)}</Text>
        </View>
    );
}