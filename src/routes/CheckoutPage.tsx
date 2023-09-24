import { Billing, Summary, LinkButton } from "../components";

export function CheckoutPage() {
  return (
    <>
      <div className="Checkout-Page Page">
        <div className="Checkout-Page-Billing-And-Summary">
          <Billing />
          <Summary />
        </div>
      </div>
      <LinkButton to="/events" label="Back to Events" />
      <LinkButton to="/" label="Home Page" />
    </>
  );
}
