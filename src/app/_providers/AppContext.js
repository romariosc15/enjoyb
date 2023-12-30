'use client'
import { createContext, useState } from 'react';
import { useDisclosure } from '@nextui-org/react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [filters, setFilters] = useState({});
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [quickApplyJobDetail, setQuickApplyJobDetail] = useState({});
  const openQuickApplyModal = (jobId) => {
    setQuickApplyJobDetail(jobId)
    onOpen()
  }
  const value = {
      filters,
      setFilters,
      isOpen,
      onOpen,
      onOpenChange,
      openQuickApplyModal,
      quickApplyJobDetail,
  };
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}