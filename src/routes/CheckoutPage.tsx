import { Billing, Summary, LinkButton } from "../components";

export function CheckoutPage() {
  return (
    <div>
      <Billing />
      <Summary />
      <LinkButton to="/events" label="Back to Events" />
      <LinkButton to="/" label="Home Page" />
    </div>
  );
}
