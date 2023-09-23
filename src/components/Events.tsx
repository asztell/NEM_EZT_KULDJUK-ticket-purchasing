import React, { useCallback, useContext } from "react";
import { EventsContext } from "../contexts/events";
import { TicketPurchasingContext } from "../contexts/ticketPurchasing";

export function Events() {
  const { selectedEvent, updateSelectedEvent } = useContext(
    TicketPurchasingContext
  );
  const { events, error } = useContext(EventsContext);
  console.log(events);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch(`http://localhost:8080/events`)
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw res;
  //       }
  //       return res.json();
  //     })
  //     .then((result) => {
  //       console.log(result);
  //       updateEvents(result);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //     });
  // }, [updateEvents]);

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
    </div>
  );
}
