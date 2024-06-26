import { createContext, useEffect, useMemo, useState } from "react";

export type EventsContextType = {
  events: string[];
  error: string | null;
};

export const EventsContext = createContext<EventsContextType>(
  {} as EventsContextType
);

export function EventsProvider({ children }: { children: React.ReactNode }) {
  const [events, setEvents] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`http://localhost:8080/events`)
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((result) => {
        // console.log(result);
        setEvents(result);
      })
      .catch((error) => {
        setError(error);
      });
  }, [setEvents]);

  const value = useMemo(() => {
    return {
      events,
      error,
    };
  }, [events, error]);

  return (
    <EventsContext.Provider value={value}>{children}</EventsContext.Provider>
  );
}
