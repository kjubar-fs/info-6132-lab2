/*
 *  Author: Kaleb Jubar
 *  Created: 28 Oct 2024, 3:45:16 PM
 *  Last update: 28 Oct 2024, 3:48:18 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { View, Text } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
            >
                {(props) => (
                    <View>
                        <Text>Home screen</Text>
                    </View>
                )}
            </Tab.Screen>
        </Tab.Navigator>
    );
}