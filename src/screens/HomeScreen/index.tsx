/*
 *  Author: Kaleb Jubar
 *  Created: 28 Oct 2024, 3:45:16 PM
 *  Last update: 28 Oct 2024, 4:16:53 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SummaryScreen from "../SummaryScreen";
import TxListScreen from "../TxListScreen";

import styles from "./styles";

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
    return (
        <View
            style={styles.container}
        >
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                sceneContainerStyle={styles.navContainer}
            >
                <Tab.Screen
                    name="Summary"
                    component={SummaryScreen}
                />

                <Tab.Screen
                    name="Transactions"
                    component={TxListScreen}
                />
            </Tab.Navigator>
        </View>
    );
}