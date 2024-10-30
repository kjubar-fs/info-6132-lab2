/*
 *  Author: Kaleb Jubar
 *  Created: 29 Oct 2024, 10:28:32 AM
 *  Last update: 29 Oct 2024, 7:58:51 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 20,
        gap: 20,
    },

    title: {
        alignSelf: "flex-start",
        paddingBottom: 10,
        
        fontSize: 20,
        fontWeight: "700",
    },

    button: {
        minWidth: "100%",
        alignItems: "center",
        padding: 2,

        borderRadius: 3,
    },

    buttonText: {
        color: "#555",
    },
});