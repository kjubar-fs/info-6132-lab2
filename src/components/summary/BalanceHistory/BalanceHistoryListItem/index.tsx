/*
 *  Author: Kaleb Jubar
 *  Created: 29 Oct 2024, 1:09:28 PM
 *  Last update: 29 Oct 2024, 1:37:31 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { View, Text } from "react-native";

import { numFormatter } from "../../../../util/constants";
import styles from "./styles";

interface BalanceHistoryListItemProps {
    value: number,
    date: string
}

export default function BalanceHistoryListItem({ value, date }: BalanceHistoryListItemProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.balance}>{numFormatter.format(value)}</Text>
            <Text>{date}</Text>
        </View>
    );
}