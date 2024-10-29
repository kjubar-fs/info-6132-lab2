/*
 *  Author: Kaleb Jubar
 *  Created: 29 Oct 2024, 1:49:51 PM
 *  Last update: 29 Oct 2024, 2:59:54 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { View, Text } from "react-native";

import { Transaction } from "../../../../data/context/transactions";

import { numFormatter } from "../../../../util/constants";
import styles from "./styles";

interface TransactionListItemProps {
    transaction: Transaction
    flatDisplay?: boolean
}

export default function TransactionListItem({ transaction, flatDisplay = false }: TransactionListItemProps) {
    const flatContents = (
        <View style={styles.flatContainer}>
            <Text style={styles.name}>{transaction.name}</Text>

            <Text
                style={transaction.value > 0 ? styles.positive : styles.negative}
            >{numFormatter.format(transaction.value)}</Text>
        </View>
    );

    if (flatDisplay) {
        return flatContents;
    } else {
        const date = new Date(transaction.date);
        const dateStr =
            `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear() % 100}`;

        return (
            <View style={styles.container}>
                {flatContents}

                <View style={styles.flatContainer}>
                    <Text style={styles.source}>
                        {transaction.value > 0 ?
                            transaction.sender :
                            transaction.destination}
                    </Text>
                    
                    <Text style={styles.date}>
                        {dateStr}
                    </Text>
                </View>
            </View>
        );
    }
}