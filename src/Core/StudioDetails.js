import React from "react";
import { Outlet } from "react-router-dom";
import AdminServiceNavigation from "./AdminServiceNav";

const StudioDetails = () => {

  return (
    <div className="px-3 pb-3">
    <AdminServiceNavigation />
          <Outlet />
    </div>
  );
};

export default StudioDetails;
