/*
 *  Author: Kaleb Jubar
 *  Created: 29 Oct 2024, 10:20:31 AM
 *  Last update: 29 Oct 2024, 10:38:38 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { View, ViewStyle } from "react-native";

import styles from "./styles";

interface CardProps {
    children: JSX.Element,
    shadowType?: "default" | "light",
    style?: ViewStyle,
}

export default function Card({ children, shadowType = "default", style }: CardProps) {
    return (
        <View style={[styles.container, styles[shadowType], style]}>
            {children}
        </View>
    );
}