import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import DashboardLayout from "./pages/Dashboard";
import Home from "./pages/Dashboard/Home/index";
import Investment from "./pages/Dashboard/Investment";
import SendMoney from "./pages/Dashboard/SendMoney";
import Loan from "./pages/Dashboard/Loan";
import Cards from "./pages/Dashboard/Cards";
import Transactions from "./pages/Dashboard/Transactions";
import Marketplace from "./pages/Dashboard/Marketplace";
import Settings from "./pages/Dashboard/Settings";
import NotFound from "./pages/Dashboard/NotFound";

const appRoutes = [
  { path: "/", component: <Home /> },
  { path: "/send", component: <SendMoney /> },
  { path: "/investment", component: <Investment /> },
  { path: "/loan", component: <Loan /> },
  { path: "/cards", component: <Cards /> },
  { path: "/transactions", component: <Transactions /> },
  { path: "/marketplace", component: <Marketplace /> },
  { path: "/settings", component: <Settings /> },
];

const App = () => {
  return (
    <div className="">
      <Router>
        <Routes>
          {appRoutes.map(({ path, component }, i) => (
            <Route
              key={i}
              path={path}
              element={<DashboardLayout children={component} />}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
