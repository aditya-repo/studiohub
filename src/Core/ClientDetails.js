import React from "react";
import { Outlet } from "react-router-dom";
import StudioServiceNavigation from "./StudioServiceNav";

const ClientDetails = () => {

  return (
    <div className="px-3 pb-3">
    <StudioServiceNavigation />
          <Outlet />
    </div>
  );
};

export default ClientDetails;
