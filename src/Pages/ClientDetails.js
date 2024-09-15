import React, { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import StudioServiceNavigation from "../Core/StudioServiceNav";

  const clientData = {
    clientId: "894390",
    projectName: "Punam Weds Pankaj",
    type: "Wedding",
    bookingdate: "19-07-2023",
    date: "12-06-2023",
    clientName: "Aditya Raj",
    address: "70 Feet Road, Patna - 800002",
    contact: "7050020659",
    venue: "Patliputra Marriage Lawn",
  };

const ClientDetails = () => {
  const { id } = useParams();
  // Use random data for demonstration purposes


  return (
    <div className="px-3 pb-3">
    <StudioServiceNavigation />
      <Outlet />
    </div>
  );
};

export default ClientDetails;
