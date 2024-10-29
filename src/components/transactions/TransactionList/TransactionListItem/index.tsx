/*
 *  Author: Kaleb Jubar
 *  Created: 29 Oct 2024, 1:49:51 PM
 *  Last update: 29 Oct 2024, 3:20:38 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { View, Text } from "react-native";

import { Transaction } from "../../../../data/context/transactions";

import { formatDate, numFormatter } from "../../../../util/constants";
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
        const date = formatDate(new Date(transaction.date));

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
                        {date}
                    </Text>
                </View>
            </View>
        );
    }
}