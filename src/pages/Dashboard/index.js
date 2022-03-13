import { Fragment, useState } from "react";
import SideNav from "../../components/SideNav/SideNav";
import mobileLogo from "../../assets/icons/mob-logo.svg";
import toggler from "../../assets/icons/toggler.svg";

const DashboardLayout = ({ children }) => {
  const [toggleNav, setToggleNav] = useState(false);
  console.log(toggleNav);
  return (
    <Fragment>
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
                <img src={mobileLogo} alt="" />
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
