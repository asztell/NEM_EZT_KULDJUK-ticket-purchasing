import { useContext } from "react";
import { TicketPurchasingContext } from "../contexts/ticketPurchasing";

export function Quantity() {
  const { ticketsCounter, updateTicketsCounter } = useContext(
    TicketPurchasingContext
  );

  function handleDecrement() { // unwrapped reference type
    if (ticketsCounter > 0) updateTicketsCounter(-1);
  }

  function handleIncrement() { // unwrapped reference type
    updateTicketsCounter(1);
  }

  return (
    <>
      <h2>Quantity</h2>
      <div style={{ margin: "30px" }}> // unwrapped reference type and inline style
        <button
          id="decrement-btn"
          style={{ marginRight: "10px" }} // unwrapped reference type and inline style
          onClick={handleDecrement}
        >
          -
        </button>
        <span id="counter-value">{ticketsCounter}</span>
        <button
          id="increment-btn"
          style={{ marginLeft: "10px" }} // unwrapped reference type and inline style
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    </>
  );
}
