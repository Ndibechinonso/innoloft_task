import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import { Provider } from "react-redux";
import store from "./redux/store";
import DashboardLayout from "./pages/Dashboard";
import Home from "./pages/Dashboard/Home/index";
import Products from "./pages/Dashboard/Products/index";
import NotFound from "./pages/Dashboard/NotFound";

const appRoutes = [
  { path: "/", component: <Home /> },
  { path: "/products", component: <Products /> },
];

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
