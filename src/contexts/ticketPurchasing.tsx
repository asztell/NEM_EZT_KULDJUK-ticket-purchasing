import { createContext, useState } from "react";

export type CardInfoType = {
  cardNumber: string;
  cardType: string;
  securityCode: string;
  securityCodeValid: boolean;
};

export type TicketPurchasingContextType = {
  event: string;
  ticketsCounter: number;
  cardInfo: CardInfoType;
  updateEvent: (event: string) => void;
  updateTicketsCounter: (ticketsCounter: number) => void;
  updateCardInfo: (cardInfo: any) => void;
};

export const TicketPurchasingContext =
  createContext<TicketPurchasingContextType>({} as TicketPurchasingContextType);

export function TicketPurchasingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ticketsCounter, setTicketsCounter] = useState(0);
  const [event, setEvent] = useState("");
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    cardType: "",
    securityCode: "",
    securityCodeValid: false,
  });

  function updateTicketsCounter(ticketsCounter: number) {
    setTicketsCounter(
      (prevTicketsCounter) => prevTicketsCounter + ticketsCounter
    );
  }

  function updateEvent(event: string) {
    setEvent(event);
  }

  function updateCardInfo(cardInfo: CardInfoType) {
    setCardInfo(cardInfo);
  }

  const value = {
    event,
    ticketsCounter,
    cardInfo,
    updateEvent,
    updateTicketsCounter,
    updateCardInfo,
  };

  return (
    <TicketPurchasingContext.Provider value={value}>
      {children}
    </TicketPurchasingContext.Provider>
  );
}
