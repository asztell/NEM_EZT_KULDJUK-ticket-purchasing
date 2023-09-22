import { createContext, useCallback, useMemo, useState } from "react";

export type CardInfoType = {
  cardNumber: string;
  cardType: string;
  securityCode: string;
  securityCodeValid: boolean;
};

export type TicketPurchasingContextType = {
  selectedEvent: string;
  events: string[];
  ticketsCounter: number;
  cardInfo: CardInfoType;
  updateSelectedEvent: (selectedEvent: string) => void;
  updateEvents: (events: string[]) => void;
  updateTicketsCounter: (ticketsCounter: number) => void;
  updateCardInfo: (cardInfo: CardInfoType) => void;
};

export const TicketPurchasingContext =
  createContext<TicketPurchasingContextType>({} as TicketPurchasingContextType);

export function TicketPurchasingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ticketsCounter, setTicketsCounter] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [events, setEvents] = useState<string[]>([]);
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    cardType: "",
    securityCode: "",
    securityCodeValid: false,
  });

  const updateTicketsCounter = useCallback((ticketsCounter: number) => {
    setTicketsCounter(
      (prevTicketsCounter) => prevTicketsCounter + ticketsCounter
    );
  }, []);

  const updateSelectedEvent = useCallback((selectedEvent: string) => {
    setSelectedEvent(selectedEvent);
  }, []);

  const updateEvents = useCallback((events: string[]) => {
    setEvents(events);
  }, []);

  const updateCardInfo = useCallback((cardInfo: CardInfoType) => {
    setCardInfo(cardInfo);
  }, []);

  const value = useMemo(() => {
    return {
      selectedEvent,
      events,
      ticketsCounter,
      cardInfo,
      updateSelectedEvent,
      updateEvents,
      updateTicketsCounter,
      updateCardInfo,
    };
  }, [
    selectedEvent,
    events,
    ticketsCounter,
    cardInfo,
    updateSelectedEvent,
    updateEvents,
    updateTicketsCounter,
    updateCardInfo,
  ]);

  return (
    <TicketPurchasingContext.Provider value={value}>
      {children}
    </TicketPurchasingContext.Provider>
  );
}
