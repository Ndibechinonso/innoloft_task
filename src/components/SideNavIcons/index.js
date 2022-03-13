import Cards from "./Cards";
import Home from "./Home";
import Investment from "./Investment";
import Loan from "./Loan";
import Marketplace from "./Marketplace";
import Send from "./Send";
import Settings from "./Settings";
import Transactions from "./Transactions";

const SideNavIcon = ({ isActive, tab }) => {
  switch (tab) {
    case "/":
      return <Home isActive={isActive} />;
    case "cards":
      return <Cards isActive={isActive} />;
    case "investment":
      return <Investment isActive={isActive} />;
    case "loan":
      return <Loan isActive={isActive} />;
    case "marketplace":
      return <Marketplace isActive={isActive} />;
    case "send":
      return <Send isActive={isActive} />;
    case "settings":
      return <Settings isActive={isActive} />;
    case "transactions":
      return <Transactions isActive={isActive} />;
    default:
      return <Home isActive={isActive} />;
  }
};

export default SideNavIcon;
