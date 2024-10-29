/*
 *  Author: Kaleb Jubar
 *  Created: 28 Oct 2024, 3:45:16 PM
 *  Last update: 29 Oct 2024, 10:07:47 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import SummaryScreen from "../SummaryScreen";
import TxListScreen from "../TxListScreen";

import { accentColor, secondaryColor } from "../../util/constants";
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
                    name="Summary"
                    component={SummaryScreen}
                    options={{
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
                    name="Transactions"
                    component={TxListScreen}
                    options={{
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