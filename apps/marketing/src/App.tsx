import { UIFork } from "uifork";
import { IndexPage } from "./pages/IndexPage";

const showUIFork = import.meta.env.MODE !== "production";

function App() {
  return (
    <>
      <IndexPage />
      {showUIFork && <UIFork />}
    </>
  );
}

export default App;
