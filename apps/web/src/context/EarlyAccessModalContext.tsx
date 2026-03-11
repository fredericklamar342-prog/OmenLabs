"use client";

import * as React from "react";
import { EarlyAccessModal } from "@/components/ui/EarlyAccessModal";

interface EarlyAccessModalContextType {
  openModal: () => void;
  closeModal: () => void;
}

const EarlyAccessModalContext = React.createContext<EarlyAccessModalContextType | undefined>(undefined);

export function EarlyAccessModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = React.useCallback(() => setIsOpen(true), []);
  const closeModal = React.useCallback(() => setIsOpen(false), []);

  return (
    <EarlyAccessModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <EarlyAccessModal isOpen={isOpen} onClose={closeModal} />
    </EarlyAccessModalContext.Provider>
  );
}

export function useEarlyAccessModal() {
  const context = React.useContext(EarlyAccessModalContext);
  if (!context) {
    throw new Error("useEarlyAccessModal must be used within an EarlyAccessModalProvider");
  }
  return context;
}

