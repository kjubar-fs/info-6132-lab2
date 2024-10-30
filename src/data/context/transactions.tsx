/*
 *  Author: Kaleb Jubar
 *  Created: 29 Oct 2024, 1:51:38 PM
 *  Last update: 30 Oct 2024, 11:49:49 AM
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

export function isTransaction(tx: Transaction): tx is Transaction {
    const txCast = tx as Transaction;
    return (
        txCast.value !== undefined &&
        txCast.date !== undefined &&
        txCast.name !== undefined &&
        txCast.sender !== undefined &&
        txCast.destination !== undefined
    );
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