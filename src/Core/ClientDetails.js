import React from "react";
import { Outlet } from "react-router-dom";
import StudioServiceNavigation from "./StudioServiceNav";
import AdminClientServiceNavigation from "./AdminClientServiceNav";

export const ClientDetails = () => {

  return (
    <div className="px-3 pb-3">
    <StudioServiceNavigation />
          <Outlet />
    </div>
  );
};


export const AdminClientNavigation = () => {

  return (
    <div className="px-3 pb-3">
    <AdminClientServiceNavigation />
          <Outlet />
    </div>
  );
};

