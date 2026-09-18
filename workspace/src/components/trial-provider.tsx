import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { TrialDialog } from "@/components/trial-dialog";

type TrialContextValue = {
  openTrial: () => void;
};

const TrialContext = createContext<TrialContextValue | null>(null);

export function TrialProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const value = useMemo(() => ({ openTrial: () => setOpen(true) }), []);
  return (
    <TrialContext.Provider value={value}>
      {children}
      <TrialDialog open={open} onOpenChange={setOpen} />
    </TrialContext.Provider>
  );
}

export function useTrial() {
  const ctx = useContext(TrialContext);
  if (!ctx) throw new Error("useTrial must be used within TrialProvider");
  return ctx;
}
