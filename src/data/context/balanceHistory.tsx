/*
 *  Author: Kaleb Jubar
 *  Created: 29 Oct 2024, 3:25:59 PM
 *  Last update: 29 Oct 2024, 3:30:14 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { createContext, useContext } from "react";

const BalanceHistoryContext = createContext<BalanceHistoryPoint[] | undefined>(undefined);

interface BalanceHistoryProviderProps {
    children: JSX.Element | JSX.Element[],
    balanceList: BalanceHistoryPoint[]
}

export type BalanceHistoryPoint = {
    value: number,
    date: number
}

export function BalanceHistoryProvider({ children, balanceList }: BalanceHistoryProviderProps) {
    return (
        <BalanceHistoryContext.Provider value={balanceList}>
            {children}
        </BalanceHistoryContext.Provider>
    );
}

export function useBalanceHistory() {
    return useContext(BalanceHistoryContext);
}