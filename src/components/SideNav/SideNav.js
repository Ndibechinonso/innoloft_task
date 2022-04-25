import { useState } from "react";
import "./SideNav.scss";
import SIDE_MENU_ITEMS from "./sideMenu";
import innologo from "../../assets/icons/innoLogo.svg";
import SideNavItem from "./SideNavItem";

const SideNav = ({ toggleNav, setToggleNav }) => {
  const [navItems, setNavItems] = useState(SIDE_MENU_ITEMS);

  return (
    <div id="sidenav" className={`${toggleNav ? "toggled" : ""}`}>
      <nav className="d-block">
        <div id="sidenav-content">
          <ul className="navbar-nav text-left">
            <li className="mb-4 text-center">
              <img src={innologo} style={{width: '136px'}}/>
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
  
    </div>
  );
};

export default SideNav;
