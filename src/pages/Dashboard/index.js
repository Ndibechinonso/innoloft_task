import { Fragment, useEffect, useState } from "react";
import SideNav from "../../components/SideNav/SideNav";
import innologo from "../../assets/icons/innoLogo.svg";
import toggler from "../../assets/icons/toggler.svg";
import "./style.scss";
const DashboardLayout = ({ children }) => {
  const [toggleNav, setToggleNav] = useState(false);
  const stringifiedConfig = localStorage.getItem("configObj");
  const parsedConfig = JSON.parse(stringifiedConfig);
  const mainColor = parsedConfig.mainColor;

  console.log(parsedConfig, "kk");
  useEffect(() => {}, []);
  return (
    <Fragment>
      <div
        className="top-nav d-lg-flex align-content-center d-none"
        style={{ background: mainColor, width: "100vw", height: "40px" }}
      >
        {" "}
        <img src={innologo} style={{ width: "136px" }} />{" "}
      </div>
      <div className="d-flex">
        <SideNav toggleNav={toggleNav} setToggleNav={setToggleNav} />
        <div id="main-area-conatiner">
          <div
            className="d-flex d-lg-none"
            style={{
              background: "#F3F5FC",
              paddingTop: "30px",
              paddingBottom: "20px",
              paddingLeft: "20px",
            }}
          >
            <img
              className=""
              src={toggler}
              onClick={() => setToggleNav((prev) => !prev)}
              alt=""
            />
            {toggleNav ? null : (
              <div style={{ margin: "auto" }}>
                <img src={innologo} alt="" />
              </div>
            )}
          </div>
          {children}
        </div>
      </div>
      <div
        className={`${toggleNav ? "d-block" : "d-none"} toggled-overlay`}
        onClick={() => setToggleNav(false)}
      />
    </Fragment>
  );
};

export default DashboardLayout;
