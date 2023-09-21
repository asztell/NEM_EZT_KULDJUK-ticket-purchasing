import { createContext, useState } from "react";

export type TicketPurchasingContextType = {
  event: string;
  ticketsCounter: number;
  updateEvent: (event: string) => void;
  updateTicketsCounter: (ticketsCounter: number) => void;
};

export const TicketPurchasingContext =
  createContext<TicketPurchasingContextType>(undefined as any);

export function TicketPurchasingProvider({ children }: any) {
  const [ticketsCounter, setTicketsCounter] = useState(0);
  const [event, setEvent] = useState("");

  function updateTicketsCounter(ticketsCounter: number) {
    setTicketsCounter(
      (prevTicketsCounter) => prevTicketsCounter + ticketsCounter
    );
  }

  function updateEvent(event: string) {
    setEvent(event);
  }

  const value = {
    event,
    ticketsCounter,
    updateEvent,
    updateTicketsCounter,
  };

  return (
    <TicketPurchasingContext.Provider value={value}>
      {children}
    </TicketPurchasingContext.Provider>
  );
}
