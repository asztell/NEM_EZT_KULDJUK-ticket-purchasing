import { useContext } from "react";
import { TicketPurchasingContext } from "../contexts/ticketPurchasing";

export function Quantity() {
  const { ticketsCounter, updateTicketsCounter } = useContext(
    TicketPurchasingContext
  );

  function handleDecrement() {
    if (ticketsCounter > 0) updateTicketsCounter(-1);
  }

  function handleIncrement() {
    updateTicketsCounter(1);
  }

  return (
    <>
      <h2>Quantity</h2>
      <div style={{ margin: "30px" }}>
        <button
          id="decrement-btn"
          style={{ marginRight: "10px" }}
          onClick={handleDecrement}
        >
          -
        </button>
        <span id="counter-value">{ticketsCounter}</span>
        <button
          id="increment-btn"
          style={{ marginLeft: "10px" }}
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    </>
  );
}