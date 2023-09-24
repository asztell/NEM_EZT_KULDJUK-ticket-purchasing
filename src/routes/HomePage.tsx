import { LinkButton } from "../components";

export function HomePage() {
  return (
    <>
      <div>HomePage</div>
      <LinkButton to="/events" label="Check out Events" />
    </>
  );
}
