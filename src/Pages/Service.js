import React from "react";
import ServiceInfo from "../_components/Details/Service-Info";

const SerivceCard = () => {
  return (

    <div className="flex justify-center">
      <div className="w-[1100px]">
        <div className="grid grid-cols-1 lg:grid-cols-9 gap-4">
          <div className="md:col-span-9">
            <h3 className="text-xl pb-2">Service Info</h3>
            <ServiceInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SerivceCard;
