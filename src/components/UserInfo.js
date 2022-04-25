import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const UserInfo = () => {
 
  const {user, company} =
    useSelector((state) => state.products.data);

  return (
    <div className="component-bg p-3">
        <h2>User Info</h2>
        <div className="d-flex"><h6 className="me-2">User -</h6><div> {user?.firstName} {user?.lastName}</div></div>

        <div className="d-flex"><h6 className="me-2">Company Name -</h6> <div>{company?.name}</div></div>

    </div>
  );
};
export default UserInfo;
