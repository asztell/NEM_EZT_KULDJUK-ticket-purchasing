import { useContext, useCallback } from "react";
import { TicketPurchasingContext } from "../contexts";

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

  return (
    <div className="Billing ">
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
        <br />
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
      <div className="Payment Section">
        <h2 className="Section-Header">Payment</h2>
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
        <br />
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
      <div className="Payment Section">
        <h2 className="Section-Header">Payment</h2>
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
        <br />
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
    </div>
  );
}
