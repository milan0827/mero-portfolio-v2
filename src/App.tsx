import { Suspense } from "react";
import AppRouter from "./routes/routes";
import Loading from "./components/loading/Loading";

const App = () => {
  return (
    <>
      <AppRouter />
    </>
  );
};

export default App;
