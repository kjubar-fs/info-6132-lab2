/*
 *  Author: Kaleb Jubar
 *  Created: 29 Oct 2024, 1:51:38 PM
 *  Last update: 29 Oct 2024, 2:13:00 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { createContext, useContext } from "react";

const TransactionsContext = createContext<Transaction[] | undefined>(undefined);

interface TransactionsProviderProps {
    children: JSX.Element | JSX.Element[],
    txList: Transaction[]
}

export type Transaction = {
    value: number,
    date: number,
    name: string,
    sender: string,
    destination: string,
    description?: string
}

export function TransactionsProvider({ children, txList }: TransactionsProviderProps) {
    return (
        <TransactionsContext.Provider value={txList}>
            {children}
        </TransactionsContext.Provider>
    );
}

export function useTransactions() {
    return useContext(TransactionsContext);
}