import { Billing, Checkout, Event, Quantity, Summary } from "./components";
import { TicketPurchasingProvider } from "./contexts/ticketPurchasing";
import "./App.css";

export function App() {
  return (
    <div className="App">
      <TicketPurchasingProvider>
        <Event />
        <Quantity />
        <Billing />
        <Summary />
        <Checkout />
      </TicketPurchasingProvider>
    </div>
  );
}
