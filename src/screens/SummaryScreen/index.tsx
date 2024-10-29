/*
 *  Author: Kaleb Jubar
 *  Created: 28 Oct 2024, 3:50:02 PM
 *  Last update: 29 Oct 2024, 7:55:02 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { Text, ScrollView, TouchableHighlight } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import Card from "../../components/common/Card";
import Divider from "../../components/common/Divider";
import BalanceListing from "../../components/summary/BalanceListing";
import BalanceHistory from "../../components/summary/BalanceHistory";
import TransactionList from "../../components/transactions/TransactionList";

import { highlight, navScreens } from "../../util/constants";
import styles from "./styles";

export default function SummaryScreen() {
    const nav = useNavigation<NativeStackNavigationProp<any>>();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Card shadowType="light">
                <Text style={styles.title}>Current Balance</Text>
                <BalanceListing balance={50000} dayChange={10} />
                <Divider />
                <BalanceHistory />
            </Card>
            <Card>
                <Text style={styles.title}>Recent Transactions</Text>
                <TransactionList flatDisplay={true} />
                <Divider />
                <TouchableHighlight
                    style={styles.button}
                    underlayColor={highlight}
                    onPress={() => { nav?.navigate(navScreens.transactionsTab) }}
                >
                    <Text>View More</Text>
                </TouchableHighlight>
            </Card>
        </ScrollView>
    );
}