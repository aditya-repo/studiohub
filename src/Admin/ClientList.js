import React from "react";
import ClientCardList from "../_components/Snippet/ClientListCard";
import { NavLink } from "react-router-dom";

// Use random data for demonstration purposes


const ClientList = () => {
  return (

    <div className="flex justify-center">
      <div className="w-[1100px]">
          <div className="lg:col-span-3">
            <h3 className="text-xl pb-2">Client List</h3>
            <NavLink to={'/admin/ADEF7/client/12783/client-info'} >
              <ClientCardList data={{ title: "Total Credit", value: 5 }} />
            </NavLink>
            <ClientCardList data={{ title: "Total Credit", value: 5 }} />
            <ClientCardList data={{ title: "Total Credit", value: 5 }} />
          </div>
        </div>
    </div>
  );
};

export default ClientList;
