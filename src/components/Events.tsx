import React, { useCallback, useContext } from "react";
import { EventsContext, TicketPurchasingContext } from "../contexts";

export function Events() {
  const { selectedEvent, updateSelectedEvent } = useContext(
    TicketPurchasingContext
  );
  const { events, error } = useContext(EventsContext);

  const handleEventChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      updateSelectedEvent(event.target.value);
    },
    [updateSelectedEvent]
  );

  return (
    <div className="Events">
      <h2>Event</h2>
      {error && <div>{error}</div>}
      <div style={{ margin: "20px" }}>
        <label htmlFor="event-select">Choose an event:</label>
        <select
          name="event-select"
          id="event-select"
          onChange={handleEventChange}
          value={selectedEvent}
        >
          <option value="">--Please choose an event--</option>
          {events.map((event: any) => (
            <option value={event.name} key={event.name + event.date}>
              <span>{`${event.name} - ${event.date} at ${event.time} - $${event.price}`}</span>
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
