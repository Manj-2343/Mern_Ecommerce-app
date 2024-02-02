import React from "react";
import LayOut from "../component/Layout/Layout"
import UserMenu from "../component/Layout/UserMenu";
import { useAuth } from "../Context/auth";

const DashBoard = () => {
  const [auth] = useAuth();
  return (
    <>
      <LayOut title={"Dashboard"}>
      <div className="container-fluid p-3 m-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>{auth?.user?.name}</h3>
              <h3>{auth?.user?.email}</h3>
              <h3>{auth?.user?.address}</h3>
            </div>
          </div>
        </div>
      </div>
      </LayOut>
    </>
  );
};

export default DashBoard;
