import { Billing, Summary, LinkButton } from "../components";

export function CheckoutPage() {
  return (
    <>
      <div
        style={{
          width: "760px",
          display: "inline-flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-between",
            // margin: "0 30px 0 30px",
            // flexBasis: "100%",
            flexBasis: "800px",
          }}
        >
          <Billing />
          <Summary />
        </div>
      </div>
      <LinkButton to="/events" label="Back to Events" />
      <LinkButton to="/" label="Home Page" />
    </>
  );
}
