import "./style.scss";

const MainWrapper = ({ children }) => {
  return (
      <div className="wrapper" style={{width: "100%"}}>{children}</div>
  );
};

export default MainWrapper;
