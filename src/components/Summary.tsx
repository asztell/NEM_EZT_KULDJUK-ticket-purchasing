import { useContext } from "react";
import { TicketPurchasingContext } from "../contexts/ticketPurchasing";

export function Summary() {
  const { event, ticketsCounter } = useContext(TicketPurchasingContext);
  return (
    <>
      <div style={{ margin: "20px" }}>
        <h2>Summary</h2>
        <p>Event: {event}</p>
        <p>Tickets: {ticketsCounter}</p>
      </div>
    </>
  );
}
