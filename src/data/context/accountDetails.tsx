/*
 *  Author: Kaleb Jubar
 *  Created: 30 Oct 2024, 12:27:25 PM
 *  Last update: 30 Oct 2024, 12:30:14 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { createContext, useContext } from "react";

const AccountDetailsContext = createContext<AccountDetails | undefined>(undefined);

interface AccountDetailsProviderProps {
    children: JSX.Element | JSX.Element[],
    acctDetails: AccountDetails
}

export type AccountDetails = {
    curBalance: number,
    dayChange: number
}

export function AccountDetailsProvider({ children, acctDetails }: AccountDetailsProviderProps) {
    return (
        <AccountDetailsContext.Provider value={acctDetails}>
            {children}
        </AccountDetailsContext.Provider>
    );
}

export function useAccountDetails() {
    return useContext(AccountDetailsContext);
}