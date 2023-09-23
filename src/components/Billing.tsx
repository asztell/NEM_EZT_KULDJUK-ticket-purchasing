import { useContext, useCallback } from "react";
import { TicketPurchasingContext } from "../contexts/ticketPurchasing";

export function Billing() {
  const { cardInfo, updateCardInfo } = useContext(TicketPurchasingContext);
  console.log(cardInfo);

  const handleCardNumberChanges = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      updateCardInfo({
        ...cardInfo,
        cardNumber: event.target.value,
      });
    },
    [cardInfo, updateCardInfo]
  );

  //   const handleCardNumberBlur = useCallback(() => {
  //     // TODO / MAYBE show credit card validation on blur
  //   }, [cardNumber, validateCardNumber]);

  const handleSecurityCodeChanges = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      updateCardInfo({
        ...cardInfo,
        securityCode: event.target.value,
      });
    },
    [cardInfo, updateCardInfo]
  );

  //   const handleSecurityCodeBlur = useCallback(() => {
  //     // TODO / MAYBE show security code validation on blur
  //   }, [securityCode, validateSecurityCode]);

  const handleSubmit = useCallback(() => {
    console.log("Submitting...");
    // this should be a POST request to the server
    // on success, the server should return a 200 status code
    // and the client should be redirected to the confirmation page
    // on failure, the server should return a 400 status code
  }, []);

  return (
    <div className="Billing">
      <h2>Billing</h2>
      <label
        htmlFor="card-number"
        style={{ marginRight: "10px", marginBottom: "20px" }}
      >
        Card Number
      </label>
      <input
        type="text"
        onChange={handleCardNumberChanges}
        // onBlur={handleCardNumberBlur}
        value={cardInfo.cardNumber}
        style={{ marginBottom: "10px" }}
      />
      <span>{cardInfo.cardType}</span>
      <br />
      <label style={{ marginRight: "10px" }}>Security Code</label>
      <input
        type="text"
        onChange={handleSecurityCodeChanges}
        // onBlur={handleSecurityCodeBlur}
        value={cardInfo.securityCode}
        maxLength={3}
        style={{ marginBottom: "20px" }}
      />
      <span>{cardInfo.securityCodeValid}</span>
      <br />
      <button
        onClick={handleSubmit}
        disabled={
          cardInfo.cardType === "" ||
          cardInfo.cardType === "Invalid" ||
          !cardInfo.securityCodeValid
        }
      >
        Purchase Tickets
      </button>
    </div>
  );
}
