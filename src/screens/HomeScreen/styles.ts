/*
 *  Author: Kaleb Jubar
 *  Created: 28 Oct 2024, 3:45:22 PM
 *  Last update: 28 Oct 2024, 4:16:45 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { StyleSheet } from "react-native";

import { safeAreaPadding, white } from "../../util/constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: safeAreaPadding,
    },

    navContainer: {
        backgroundColor: white,
    },
});