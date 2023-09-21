import { useContext } from "react";
import { TicketPurchasingContext } from "../contexts/ticketPurchasing";

export function Event() {
  const { event, updateEvent } = useContext(TicketPurchasingContext);
  function onChange(event: any) {
    updateEvent(event.target.value);
  }
  return (
    <>
      <h2>Event</h2>
      <div style={{ margin: "20px" }}>
        <label htmlFor="event-select">Choose an event:</label>
        <select name="pets" id="event-select" onChange={onChange} value={event}>
          <option value="">--Please choose an event--</option>
          <option value="Zambo Jimmy in concert">Zambo Jimmy in concert</option>
          <option value="Gangszta Zolee live!">Gangszta Zolee live!</option>
          <option value="Metallica in concert">Metallica in concert</option>
          <option value="Eminem live!">Eminem live!</option>
        </select>
      </div>
    </>
  );
}
