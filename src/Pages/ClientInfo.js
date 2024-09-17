import React from "react";
import BasicInfo from "../_components/Details/Basic-Info";
import UserAccess from "../_components/Details/User-Access";

// Use random data for demonstration purposes
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


const ClientCard = () => {
  return (

    <div className="flex justify-center">
      <div className="w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-9 gap-4">
          <div className="lg:col-span-6">
            <h3 className="text-xl pb-2">Basic Info</h3>
            <BasicInfo clientData={clientData} />
          </div>
          <div className="md:col-span-3">
            <h3 className="text-xl pb-2">User Access</h3>
            <UserAccess />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
