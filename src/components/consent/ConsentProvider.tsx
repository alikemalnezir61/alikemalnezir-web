"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  ConsentState,
  defaultConsent,
  loadConsent,
  saveConsent,
  CONSENT_EVENT,
} from "@/lib/consent";

type ConsentContextValue = {
  consent: ConsentState;
  hasChosen: boolean;
  updateConsent: (state: ConsentState) => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<ConsentState>(defaultConsent);
  const [hasChosen, setHasChosen] = useState(false);

  useEffect(() => {
    const stored = loadConsent();
    if (stored) {
      setConsent(stored);
      setHasChosen(true);
    }

    function handleExternalChange(e: Event) {
      const detail = (e as CustomEvent<ConsentState>).detail;
      if (detail) setConsent(detail);
    }

    window.addEventListener(CONSENT_EVENT, handleExternalChange);
    return () => window.removeEventListener(CONSENT_EVENT, handleExternalChange);
  }, []);

  function updateConsent(state: ConsentState) {
    setConsent(state);
    setHasChosen(true);
    saveConsent(state);
  }

  return (
    <ConsentContext.Provider value={{ consent, hasChosen, updateConsent }}>
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be used within ConsentProvider");
  return ctx;
}
