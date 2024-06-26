import { useContext } from "react";
import { Events, Quantity, LinkButton } from "../components";
import { TicketPurchasingContext } from "../contexts";

export function EventsPage() {
  const { selectedEvent, ticketsCounter } = useContext(TicketPurchasingContext);
  const disabledLinkButton = selectedEvent === "" || ticketsCounter === 0;

  return (
    <div style={{ border: "1px solid black" }}>
      <div className="Events-Page">
        <Events />
        <Quantity />
      </div>
      <LinkButton
        to="/"
        label="< Home Page"
        className="Events-Page-To-Home-Page"
      />
      <LinkButton
        to="/checkout"
        disabled={disabledLinkButton}
        label="Next >"
        className="Events-Page-To-Checkout-Page"
      />
    </div>
  );
}
