'use client'
import { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
    const [filters, setFilters] = useState({});
    const value = {
        filters,
        setFilters,
    };
    return (
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    );
}