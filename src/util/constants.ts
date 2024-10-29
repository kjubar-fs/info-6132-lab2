/*
 *  Author: Kaleb Jubar
 *  Created: 28 Oct 2024, 3:53:18 PM
 *  Last update: 29 Oct 2024, 2:29:22 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { Platform } from "react-native"

export const primaryColor = "#2A324B";
export const secondaryColor = "#515D82";
export const accentColor = "#E6AF2E";
export const white = "#FBFBFB";
export const positiveColor = "#0A0";
export const negativeColor = "#A00";

export const safeAreaPadding = Platform.OS === "ios" ? 60 : 50;

export const dropShadowStyle = {
    // remove shadowColor on Android because it conflicts with elevation
    shadowColor: Platform.OS === "ios" ? "#666" : undefined,
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,
};

export const lightDropShadowStyle = {
    // remove shadowColor on Android because it conflicts with elevation
    shadowColor: Platform.OS === "ios" ? "#999" : undefined,
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
};

export const numFormatter = Intl.NumberFormat(
    "en-CA",
    {
        style: "currency",
        currency: "CAD",
    }
);