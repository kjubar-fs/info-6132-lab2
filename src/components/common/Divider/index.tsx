/*
 *  Author: Kaleb Jubar
 *  Created: 29 Oct 2024, 10:50:55 AM
 *  Last update: 29 Oct 2024, 10:59:40 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { View } from "react-native";

import styles from "./styles";

interface DividerProps {
    height?: number,
}

export default function Divider({ height = 1 }: DividerProps) {
    return (
        <View style={styles.container}>
            <View
                style={[
                    styles.divider,
                    { height },
                ]}
            />
        </View>
    );
}