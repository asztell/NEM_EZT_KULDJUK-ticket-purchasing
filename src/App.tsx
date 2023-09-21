import { Billing } from "./components/Billing";
import { Checkout } from "./components/Checkout";
import { Quantity } from "./components/Quantity";
import { Event } from "./components/Event";
import { Summary } from "./components/Summary";
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
