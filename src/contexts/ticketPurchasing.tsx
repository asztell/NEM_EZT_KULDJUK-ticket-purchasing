import { createContext, useState } from "react";

export type TicketPurchasingContextType = {
  event: string;
  ticketsCounter: number;
  updateEvent: (event: string) => void;
  updateTicketsCounter: (ticketsCounter: number) => void;
};

export const TicketPurchasingContext =
  createContext<TicketPurchasingContextType>(undefined as any); // no any

export function TicketPurchasingProvider({ children }: any) { // no any
  const [ticketsCounter, setTicketsCounter] = useState(0);
  const [event, setEvent] = useState("");

  function updateTicketsCounter(ticketsCounter: number) { // unwrapped reference type
    setTicketsCounter(
      (prevTicketsCounter) => prevTicketsCounter + ticketsCounter
    );
  }

  function updateEvent(event: string) { // unwrapped reference type
    setEvent(event);
  }

  const value = { // unwrapped reference type
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
