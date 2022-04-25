import "./style.scss";
import { Container } from "react-bootstrap";
const MainWrapper = ({ children }) => {
  return(
    <div className="Container">
  <div className="wrapper">{children}</div>
  </div>
  )
};

export default MainWrapper;
