/*
 *  Author: Kaleb Jubar
 *  Created: 29 Oct 2024, 2:26:57 PM
 *  Last update: 29 Oct 2024, 7:57:13 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { StyleSheet } from "react-native";

import { negativeColor, positiveColor } from "../../../../util/constants";

export default StyleSheet.create({
    container: {
        gap: 5,
        padding: 2,

        borderRadius: 5,
    },

    flatContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    name: {
        fontWeight: "500",
        color: "#222",
    },

    source: {
        fontSize: 13,
        fontWeight: "300",
        color: "#444",
    },

    date: {
        fontSize: 13,
        fontWeight: "300",
    },

    positive: {
        color: positiveColor,
    },

    negative: {
        color: negativeColor,
    },
});