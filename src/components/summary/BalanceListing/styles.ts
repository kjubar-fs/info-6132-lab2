/*
 *  Author: Kaleb Jubar
 *  Created: 29 Oct 2024, 10:46:24 AM
 *  Last update: 29 Oct 2024, 2:29:35 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { StyleSheet } from "react-native";

import { negativeColor, positiveColor } from "../../../util/constants";

export default StyleSheet.create({
    container: {
        minWidth: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    balanceText: {
        fontSize: 20,
        fontWeight: "600",
    },

    dayChangeContainer: {
        alignItems: "flex-end",
    },

    dayChangeHeader: {
        fontWeight: "500",
        color: "#666",
    },

    positive: {
        color: positiveColor,
    },

    negative: {
        color: negativeColor,
    },
});