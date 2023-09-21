import { useContext, useEffect, useState } from "react";
import { TicketPurchasingContext } from "../contexts/ticketPurchasing";

export function Event() {
  const { event, updateEvent } = useContext(TicketPurchasingContext);
  const [error, setError] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/events`)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setEvents(result);
        },
        (error) => {
          setError(error);
        }
      );
  }, []);

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
          {events.map((event: any) => (
            <option value={event.name}>{event.name}</option>
          ))}
        </select>
      </div>
    </>
  );
}
