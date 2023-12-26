'use client'
import { createContext, useState } from 'react';
import { useDisclosure } from '@nextui-org/react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [filters, setFilters] = useState({});
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const value = {
      filters,
      setFilters,
      isOpen,
      onOpen,
      onOpenChange
  };
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}