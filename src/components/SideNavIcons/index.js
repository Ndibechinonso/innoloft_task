import Home from "./Home";
import Products from "./Products";

const SideNavIcon = ({ isActive, tab }) => {
  switch (tab) {
    case "/":
      return <Home isActive={isActive} />;
      case "products":
        return <Products isActive={isActive} />;
    default:
      return <Home isActive={isActive} />;
  }
};

export default SideNavIcon;
