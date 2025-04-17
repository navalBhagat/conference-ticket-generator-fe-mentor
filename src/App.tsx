import "./App.scss";
import FormPage from "./pages/FormPage";
import TicketPage from "./pages/TicketPage";

function App() {
  return (
    <>
      <header>
        <img src="/assets/images/logo-full.svg" alt="logo" />
      </header>
      <main>
        <FormPage />
        <TicketPage />
      </main>
    </>
  );
}

export default App;
