import { Billing } from "./components/Billing";
import { Checkout } from "./components/Checkout";
import { Quantity } from "./components/Quantity";
import { Shows } from "./components/Shows";
import { Summary } from "./components/Summary";
import "./App.css";

export function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <body>
        <Shows />
        <Quantity />
        <Billing />
        <Checkout />
        <Summary />
      </body>
    </div>
  );
}
