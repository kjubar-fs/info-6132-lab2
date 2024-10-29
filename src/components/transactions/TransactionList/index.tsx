/*
 *  Author: Kaleb Jubar
 *  Created: 29 Oct 2024, 1:48:36 PM
 *  Last update: 29 Oct 2024, 3:41:49 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { View, FlatList } from "react-native";

import { useTransactions } from "../../../data/context/transactions";

import TransactionListItem from "./TransactionListItem";
import Divider from "../../common/Divider";

import styles from "./styles";

interface TransactionListProps {
    flatDisplay?: boolean
    rowLimit?: number
}

export default function TransactionList({ flatDisplay = false, rowLimit = 7 }: TransactionListProps) {
    const transactions = useTransactions();
    let transactionsToDisplay = transactions;
    if (flatDisplay) {
        transactionsToDisplay = transactionsToDisplay?.slice(0, rowLimit);
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={transactionsToDisplay}
                renderItem={({ item }) => (
                    <TransactionListItem transaction={item} flatDisplay={flatDisplay} />
                )}
                keyExtractor={(_, ix) => ix.toString()}
                ItemSeparatorComponent={Divider}
                scrollEnabled={!flatDisplay}
                showsVerticalScrollIndicator={false}
                style={styles.list}
            />
        </View>
    );
}