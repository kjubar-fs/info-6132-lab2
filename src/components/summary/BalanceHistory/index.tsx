/*
 *  Author: Kaleb Jubar
 *  Created: 29 Oct 2024, 12:53:27 PM
 *  Last update: 29 Oct 2024, 2:55:55 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { FlatList, View } from "react-native";

import BalanceHistoryListItem from "./BalanceHistoryListItem";
import Divider from "../../common/Divider";

import styles from "./styles";

interface BalanceHistoryProps {
    history: BalanceHistoryPoint[],
    displayPoints?: number
}

type BalanceHistoryPoint = {
    value: number,
    month: number,
    day: number
}

export default function BalanceHistory({ history, displayPoints = 5 }: BalanceHistoryProps) {
    const historyTrimmed = history.slice(0, displayPoints);

    return (
        <View style={styles.container}>
            <FlatList
                data={historyTrimmed}
                renderItem={({ item }) => (
                    <BalanceHistoryListItem
                        value={item.value}
                        date={`${item.month}/${item.day}`}
                    />
                )}
                keyExtractor={(_, ix) => ix.toString()}
                ItemSeparatorComponent={Divider}
                scrollEnabled={false}
                style={styles.list}
            />
        </View>
    );
}