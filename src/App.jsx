import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AppRoutes from "./routes";

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <AppRoutes />
  </BrowserRouter>
);

export default App;
