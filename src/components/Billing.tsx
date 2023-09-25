import { useContext, useCallback } from "react";
import { TicketPurchasingContext } from "../contexts";

export function Billing() {
  const { cardInfo, updateCardInfo } = useContext(TicketPurchasingContext);
  console.log(cardInfo);

  const handleNameOnCardChanges = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      updateCardInfo({
        ...cardInfo,
        nameOnCard: event.target.value,
      });
    },
    [cardInfo, updateCardInfo]
  );

  const handleCardNumberChanges = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      updateCardInfo({
        ...cardInfo,
        cardNumber: event.target.value,
      });
    },
    [cardInfo, updateCardInfo]
  );

  const handleExpirationDateChanges = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      updateCardInfo({
        ...cardInfo,
        expirationDate: event.target.value,
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

  return (
    <div className="Billing ">
      <div className="Delivery Section">
        <h2 className="Section-Header">Delivery</h2>
        <h3>Mobile - Free</h3>
        <p>
          Your phone's your ticket. Locate your tickets in your account - or in
          your app. When you go mobile, your tickets will not be emailed to you
          or available for print.
        </p>
      </div>
      <div className="Payment Section">
        <h2 className="Section-Header">Payment</h2>
        <div data-tid="accepted-cards" className="sc-kuiCay grIRYc">
          <div
            // logo="american-express"
            aria-label="american-express"
            role="img"
            className="sc-jwulOH gxFWPY"
          ></div>
          <div
            // logo="visa"
            aria-label="visa"
            role="img"
            className="sc-jwulOH ROGrU"
          ></div>
          <div
            // logo="master-card"
            aria-label="master-card"
            role="img"
            className="sc-jwulOH iCqfCk"
          ></div>
          <div
            // logo="discover"
            aria-label="discover"
            role="img"
            className="sc-jwulOH iWogNW"
          ></div>
          <div
            // logo="diners-club"
            aria-label="diners-club"
            role="img"
            className="sc-jwulOH hnmQKn"
          ></div>
        </div>
        <label
          htmlFor="name-on-card"
          className="Payment-Form-Label"
          // style={{ marginRight: "10px", marginBottom: "20px" }}
        >
          Name on Card
        </label>
        <input
          type="text"
          onChange={handleNameOnCardChanges}
          // onBlur={handleCardNumberBlur}
          value={cardInfo.nameOnCard}
          // style={{ marginBottom: "10px" }}
        />
        {/* <span>{cardInfo.cardType}</span> */}
        <label
          htmlFor="card-number"
          className="Payment-Form-Label"
          // style={{ marginRight: "10px", marginBottom: "20px" }}
        >
          Card Number
        </label>
        <input
          type="text"
          onChange={handleCardNumberChanges}
          // onBlur={handleCardNumberBlur}
          value={cardInfo.cardNumber}
          // style={{ marginBottom: "10px" }}
        />
        <span>{cardInfo.cardType}</span>
        <label className="Payment-Form-Label">Expiration Date</label>
        <input
          type="text"
          onChange={handleExpirationDateChanges}
          // onBlur={handleSecurityCodeBlur}
          value={cardInfo.expirationDate}
          maxLength={8}
          // style={{ marginBottom: "20px" }}
        />
        <div>{cardInfo.expirationDateValid}</div>
        <label className="Payment-Form-Label">Security Code</label>
        <input
          type="text"
          onChange={handleSecurityCodeChanges}
          // onBlur={handleSecurityCodeBlur}
          value={cardInfo.securityCode}
          maxLength={3}
          // style={{ marginBottom: "20px" }}
        />
        <span>{cardInfo.securityCodeValid}</span>
      </div>
      <div className="Ticket-Insurance Section">
        <h2 className="Section-Header">Ticket Insurance</h2>
        <p>
          Get reimbursed up to 100% with Event Ticket Insurance for only $28.00
          per ticket ($56.00 total). *Offer not available after purchase is
          finalized.
        </p>
      </div>
    </div>
  );
}
