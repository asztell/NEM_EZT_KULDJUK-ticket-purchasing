import { Billing, Summary, LinkButton } from "../components";

export function CheckoutPage() {
  return (
    <>
      <div>
        <div>
          <Billing />
          <Summary />
        </div>
      </div>
      <LinkButton to="/events" label="Back to Events" />
      <LinkButton to="/" label="Home Page" />
    </>
  );
}
