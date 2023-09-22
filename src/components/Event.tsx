import React, { useCallback, useContext, useEffect, useState } from "react";
import { TicketPurchasingContext } from "../contexts/ticketPurchasing";

export function Event() {
  const { events, selectedEvent, updateEvents, updateSelectedEvent } =
    useContext(TicketPurchasingContext);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/events`)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          updateEvents(result);
        },
        (error) => {
          setError(error);
        }
      );
  }, [updateEvents]);

  const handleEventChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      updateSelectedEvent(event.target.value);
    },
    [updateSelectedEvent]
  );

  return (
    <>
      <h2>Event</h2>
      {error && <div>{error}</div>}
      <div style={{ margin: "20px" }}>
        <label htmlFor="event-select">Choose an event:</label>
        <select
          name="pets"
          id="event-select"
          onChange={handleEventChange}
          value={selectedEvent}
        >
          <option value="">--Please choose an event--</option>
          {events.map((event: any) => (
            <option value={event.name} key={event.name + event.date}>
              <div>{event.name}</div>
              <br />
              <div>{event.date + " at " + event.time}</div>
              <br />
              <div>{"$" + event.price}</div>
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
