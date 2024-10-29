/*
 *  Author: Kaleb Jubar
 *  Created: 28 Oct 2024, 3:45:16 PM
 *  Last update: 29 Oct 2024, 3:15:26 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import SummaryScreen from "../SummaryScreen";
import TxListScreen from "../TxListScreen";

import { secondaryColor, accentColor, navScreens } from "../../util/constants";
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
                    tabBarInactiveTintColor: secondaryColor,
                    tabBarActiveTintColor: accentColor,
                }}
                sceneContainerStyle={styles.navContainer}
            >
                <Tab.Screen
                    name={navScreens.summary}
                    component={SummaryScreen}
                    options={{
                        tabBarLabel: "Summary",
                        tabBarIcon({ color, size }) {
                            return (
                                <MaterialCommunityIcons
                                    name="bank"
                                    size={size}
                                    color={color}
                                />
                            );
                        },
                    }}
                />

                <Tab.Screen
                    name={navScreens.transactions}
                    component={TxListScreen}
                    options={{
                        tabBarLabel: "Transactions",
                        tabBarIcon({ color, size }) {
                            return (
                                <MaterialIcons
                                    name="list-alt"
                                    size={size}
                                    color={color}
                                />
                            );
                        },
                    }}
                />
            </Tab.Navigator>
        </View>
    );
}