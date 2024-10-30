/*
 *  Author: Kaleb Jubar
 *  Created: 29 Oct 2024, 4:05:26 PM
 *  Last update: 30 Oct 2024, 12:14:50 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    error: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    errorText: {
        fontSize: 18,
    },

    container: {
        gap: 15,
        padding: 30,
    },

    titleContainer: {
        gap: 5,
    },

    title: {
        fontSize: 24,
        fontWeight: "600",
    },

    subtitle: {
        fontSize: 15,
        fontWeight: "300",
        color: "#777",
    },

    amountText: {
        fontSize: 20,
        fontWeight: "500",
    },

    keyValueContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    kvText: {
        fontSize: 16,
    },

    key: {
        fontWeight: "600",
    },
});