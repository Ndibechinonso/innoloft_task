import { useCallback } from "react";
import { useLocation, NavLink } from "react-router-dom";
import SideNavIcon from "../SideNavIcons/index";

const SideNavItem = ({ setToggleNav, link, title, style, icon }) => {
  const location = useLocation();
  const isActive = useCallback(() => {
    return location.pathname === link;
  }, [link, location.pathname]);

  return (
    <li
      className={`nav-item sidenav-link d-flex justify-content-start`}
      onClick={() => setToggleNav(false)}
      style={style}
    >
      <NavLink to={link || ""} className={`nav-link ps-2 d-flex`}>
        <span
          className="me-3 d-flex justify-content-start"
          style={{ width: "20px" }}
        >
          <SideNavIcon tab={icon} isActive={isActive()} />
        </span>
        <span>{title}</span>
      </NavLink>
    </li>
  );
};

export default SideNavItem;
