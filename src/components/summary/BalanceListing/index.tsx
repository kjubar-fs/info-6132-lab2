/*
 *  Author: Kaleb Jubar
 *  Created: 29 Oct 2024, 10:45:06 AM
 *  Last update: 30 Oct 2024, 12:33:28 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { View, Text } from "react-native";

import { useAccountDetails } from "../../../data/context/accountDetails";

import { negativeColor, numFormatter, positiveColor } from "../../../util/constants";
import styles from "./styles";

export default function BalanceListing() {
    const acctDetails = useAccountDetails();

    if (!acctDetails) {
        return (
            <Text>Account details not found, try again later.</Text>
        );
    }

    let dayChangeColorStyle = undefined;
    if (acctDetails.dayChange > 0) {
        dayChangeColorStyle = { color: positiveColor };
    } else if (acctDetails.dayChange < 0) {
        dayChangeColorStyle = { color: negativeColor };
    }

    return (
        <View style={styles.container}>
            <Text style={styles.balanceText}>
                {numFormatter.format(acctDetails.curBalance)}
            </Text>

            <View style={styles.dayChangeContainer}>
                <Text style={styles.dayChangeHeader}>Day Change</Text>
                <Text style={dayChangeColorStyle}>
                    {`${acctDetails.dayChange > 0 ? "+" : ""}${numFormatter.format(acctDetails.dayChange)}`}
                </Text>
            </View>
        </View>
    );
}