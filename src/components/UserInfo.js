import { useSelector } from "react-redux";

const UserInfo = () => {
  const { user, company } = useSelector((state) => state.products.data);
  return (
    <div className="component-bg p-3 pb-5">
      <h2>User Info</h2>
      <div className="d-flex mt-5">
        <h6 className="me-2">User -</h6>
        <div>
          {" "}
          {user?.firstName} {user?.lastName}
        </div>
      </div>
      <div className="d-flex mt-4 pb-5">
        <h6 className="me-2">Company Name -</h6> <div>{company?.name}</div>
      </div>
    </div>
  );
};
export default UserInfo;
