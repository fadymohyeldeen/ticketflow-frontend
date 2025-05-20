import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes/AppRoutes";
import { TicketsProvider } from "./context/TicketsContext";

const App = () => {
  return (
    <>
      <TicketsProvider>
        <AppRoutes />
        <Toaster />
      </TicketsProvider>
    </>
  );
};

export default App;
