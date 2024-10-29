/*
 *  Author: Kaleb Jubar
 *  Created: 28 Oct 2024, 3:50:14 PM
 *  Last update: 29 Oct 2024, 4:12:31 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TxListHomeScreen from "../TxListHomeScreen";
import TxDetailScreen from "../TxDetailScreen";

import { navScreens } from "../../util/constants";

const Stack = createNativeStackNavigator();

export default function TxListScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={navScreens.transactionsList}
                component={TxListHomeScreen}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name={navScreens.transactionDetail}
                component={TxDetailScreen}
                options={{
                    headerTitle: "Transaction Details",
                }}
            />
        </Stack.Navigator>
    );
}