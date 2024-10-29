/*
 *  Author: Kaleb Jubar
 *  Created: 29 Oct 2024, 10:45:06 AM
 *  Last update: 29 Oct 2024, 1:32:43 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { View, Text } from "react-native";

import { numFormatter } from "../../../util/constants";
import styles from "./styles";

interface BalanceListingProps {
    balance: number,
    dayChange?: number,
}

export default function BalanceListing({ balance, dayChange = 0 }: BalanceListingProps) {
    let dayChangeColorStyle = undefined;
    if (dayChange > 0) {
        dayChangeColorStyle = styles.positive;
    } else if (dayChange < 0) {
        dayChangeColorStyle = styles.negative;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.balanceText}>
                {numFormatter.format(balance)}
            </Text>

            <View style={styles.dayChangeContainer}>
                <Text style={styles.dayChangeHeader}>Day Change</Text>
                <Text style={dayChangeColorStyle}>
                    {`${dayChange > 0 ? "+" : ""}${numFormatter.format(dayChange)}`}
                </Text>
            </View>
        </View>
    );
}