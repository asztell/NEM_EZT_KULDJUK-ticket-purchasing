import { useContext } from "react";
import { TicketPurchasingContext } from "../contexts/ticketPurchasing";

export function Summary() {
  const { selectedEvent, ticketsCounter } = useContext(TicketPurchasingContext);

  return (
    <div className="Summary">
      <h2>Summary</h2>
      <p>Event: {selectedEvent}</p>
      <p>Tickets: {ticketsCounter}</p>
    </div>
  );
}
