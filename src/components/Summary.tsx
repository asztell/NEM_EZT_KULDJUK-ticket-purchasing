import { useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { TicketPurchasingContext } from "../contexts/ticketPurchasing";
import { Redirect } from "./Redirect";

export function Summary() {
  const { selectedEvent, ticketsCounter, cardInfo } = useContext(
    TicketPurchasingContext
  );
  const navigate = useNavigate();
  const handleSubmit = useCallback(() => {
    console.log("Submitting...");
    // this should be a POST request to the server
    // on success, the server should return a 200 status code
    // and the client should be redirected to the confirmation page
    // on failure, the server should return a 400 status code
    fetch("http://localhost:8080/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event: selectedEvent,
        tickets: ticketsCounter,
        cardNumber: cardInfo.cardNumber,
        securityCode: cardInfo.securityCode,
      }),
    })
      .then((response) => {
        console.log("/checkout response", response);
        if (!response.ok) {
          navigate("/confirmation/error", { state: response });
          //   throw response;
        }
        return response.json();
      })
      .then((response) => {
        navigate("/confirmation/success", { state: response });
      })
      .catch((error) => {
        navigate("/confirmation/error", { state: error });
        console.log(error);
      });
  }, [selectedEvent, ticketsCounter, cardInfo, navigate]);

  return (
    <div className="Summary">
      <h2>Summary</h2>
      <p>Event: {selectedEvent}</p>
      <p>Tickets: {ticketsCounter}</p>
      <p>Card Number: {cardInfo.cardNumber}</p>
      <p>Security Code: {cardInfo.securityCode}</p>
      <Redirect
        to="/confirmation/pending"
        label="Purchase Tickets"
        disabled={
          cardInfo.cardType === "" ||
          cardInfo.cardType === "Invalid" ||
          !cardInfo.securityCodeValid
        }
        className="Purchase-Tickets"
        onClick={handleSubmit}
      />
      {/* <button
        onClick={handleSubmit}
        disabled={
          cardInfo.cardType === "" ||
          cardInfo.cardType === "Invalid" ||
          !cardInfo.securityCodeValid
        }
      >
        Purchase Tickets
      </button> */}
    </div>
  );
}
