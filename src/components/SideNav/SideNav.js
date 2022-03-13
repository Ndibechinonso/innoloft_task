import { useState } from "react";
import "./SideNav.scss";
import LogoutIcon from "../SideNavIcons/logout";
import SIDE_MENU_ITEMS from "./sideMenu";
import SideNavItem from "./SideNavItem";
import cloudLogo from "../../assets/icons/cloudbank-logo.svg";

const SideNav = ({ toggleNav, setToggleNav }) => {
  const [navItems, setNavItems] = useState(SIDE_MENU_ITEMS);

  return (
    <div id="sidenav" className={`${toggleNav ? "toggled" : ""}`}>
      <nav className="d-block">
        <div id="sidenav-content">
          <ul className="navbar-nav text-left">
            <li className="mb-4">
              <img src={cloudLogo} />
            </li>
            {navItems.map((menu, i) => (
              <SideNavItem
                key={i}
                pos={i}
                setToggleNav={setToggleNav}
                link={menu.link}
                title={menu.title}
                style={menu.style}
                icon={menu.icon}
              />
            ))}
          </ul>
        </div>
      </nav>
      <li className="nav-item d-flex sidenav-link cursor-pointer logout-div mt-auto">
        <span
          className="me-4 d-flex justify-content-end"
          style={{ width: "20px" }}
        >
          <LogoutIcon />
        </span>
        <span>Logout</span>
      </li>
    </div>
  );
};

export default SideNav;
