/*
 *  Author: Kaleb Jubar
 *  Created: 29 Oct 2024, 1:49:51 PM
 *  Last update: 30 Oct 2024, 12:04:15 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { View, Text, TouchableHighlight } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { Transaction } from "../../../../data/context/transactions";

import { formatDate, highlight, navScreens, negativeColor, numFormatter, positiveColor } from "../../../../util/constants";
import styles from "./styles";

interface TransactionListItemProps {
    transaction: Transaction
    flatDisplay?: boolean
}

export default function TransactionListItem({ transaction, flatDisplay = false }: TransactionListItemProps) {
    const nav = useNavigation<NativeStackNavigationProp<any>>();

    const flatContents = (
        <View style={styles.flatContainer}>
            <Text style={styles.name}>{transaction.name}</Text>

            <Text
                style={{ color: transaction.value > 0 ? positiveColor : negativeColor }}
            >{numFormatter.format(transaction.value)}</Text>
        </View>
    );

    if (flatDisplay) {
        return flatContents;
    } else {
        const date = formatDate(new Date(transaction.date));

        return (
            <TouchableHighlight
                style={styles.container}
                onPress={() => {
                    nav?.navigate(navScreens.transactionDetail, transaction);
                }}
                underlayColor={highlight}
            >
                <View style={styles.contentContainer}>
                    <View style={styles.rowContainer}>
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

                    <View style={styles.disclosure}>
                        <MaterialIcons
                            name="arrow-forward-ios"
                            size={10}
                            color="#888"
                        />
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}