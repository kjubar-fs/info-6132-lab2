/*
 *  Author: Kaleb Jubar
 *  Created: 29 Oct 2024, 10:28:32 AM
 *  Last update: 29 Oct 2024, 7:56:28 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { StyleSheet } from "react-native";

import { white } from "../../util/constants";

export default StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 20,
        paddingBottom: 110,
        gap: 20,

        backgroundColor: white,
    },

    title: {
        alignSelf: "flex-start",
        
        fontSize: 20,
        fontWeight: "700",
    },
});