/*
 *  Author: Kaleb Jubar
 *  Created: 29 Oct 2024, 12:53:27 PM
 *  Last update: 29 Oct 2024, 3:34:06 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { FlatList, View } from "react-native";

import { useBalanceHistory } from "../../../data/context/balanceHistory";

import BalanceHistoryListItem from "./BalanceHistoryListItem";
import Divider from "../../common/Divider";

import styles from "./styles";

interface BalanceHistoryProps {
    displayPoints?: number | "all"
}

export default function BalanceHistory({ displayPoints = 5 }: BalanceHistoryProps) {
    const history = useBalanceHistory();
    const historyTrimmed = history?.slice(0, displayPoints === "all" ? history.length : displayPoints);

    return (
        <View style={styles.container}>
            <FlatList
                data={historyTrimmed}
                renderItem={({ item }) => (
                    <BalanceHistoryListItem
                        value={item.value}
                        date={new Date(item.date)}
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