import React, { useState, useContext, useCallback } from "react";
import { TicketPurchasingContext } from "../contexts/ticketPurchasing";

export function Billing() {
  const { updateCardInfo } = useContext(TicketPurchasingContext);
  const [cardNumber, setCardNumber] = useState("");
  const [cardType, setCardType] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [securityCodeValid, setSecurityCodeValid] = useState(false);

  const handleCardNumberChanges = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCardNumber(event.target.value);
    },
    []
  );

  const validateCardNumber = useCallback((cardNumber: string) => {
    const visa = new RegExp("^4[0-9]{12}(?:[0-9]{3})?$");
    if (cardNumber.match(visa) !== null) return "Visa";
    const mastercard = new RegExp(
      "^5[1-5][0-9]{14}|^(222[1-9]|22[3-9]\\d|2[3-6]\\d{2}|27[0-1]\\d|2720)[0-9]{12}$"
    );
    if (cardNumber.match(mastercard) !== null) return "Mastercard";
    const amex = new RegExp("^3[47][0-9]{13}$");
    if (cardNumber.match(amex)) return "American Express";
    const discover = new RegExp("^6(?:011|5[0-9]{2})[0-9]{12}$");
    if (cardNumber.match(discover)) return "Discover";
    if (cardNumber.length === 0) return "";
    return "Invalid";
  }, []);

  const handleCardNumberBlur = useCallback(() => {
    setCardType(validateCardNumber(cardNumber));
  }, [cardNumber, validateCardNumber]);

  const handleSecurityCodeChanges = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSecurityCode(event.target.value);
    },
    []
  );

  const validateSecurityCode = useCallback((securityCode: string) => {
    return securityCode.match(new RegExp("^[0-9]{3,4}$")) !== null;
  }, []);

  const handleSecurityCodeBlur = useCallback(() => {
    setSecurityCodeValid(validateSecurityCode(securityCode));
  }, [securityCode, validateSecurityCode]);

  const handleSubmit = useCallback(() => {
    updateCardInfo({
      cardNumber,
      cardType,
      securityCode,
      securityCodeValid,
    });
  }, [cardNumber, cardType, securityCode, securityCodeValid, updateCardInfo]);

  return (
    <div>
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
        onBlur={handleCardNumberBlur}
        value={cardNumber}
        style={{ marginBottom: "10px" }}
      />
      <span>{cardType}</span>
      <br />
      <label style={{ marginRight: "10px" }}>Security Code</label>
      <input
        type="text"
        onChange={handleSecurityCodeChanges}
        onBlur={handleSecurityCodeBlur}
        value={securityCode}
        maxLength={3}
        style={{ marginBottom: "20px" }}
      />
      <span>{securityCodeValid}</span>
      <br />
      <button
        onClick={handleSubmit}
        disabled={
          (cardType === "" || cardType === "Invalid") && !securityCodeValid
        }
      >
        Purchase Tickets
      </button>
    </div>
  );
}
