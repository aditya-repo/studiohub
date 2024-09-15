import React from "react";

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
    <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-md">
      <div className="px-4 py-4 sm:px-6">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          {clientData.clientName}
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          <span className="font-bold">Services:</span> Individual photography,
          Couples photography, Rural wedding photography, Destination wedding
          photography, Maternity photography.
        </p>
      </div>
      <div className="mt-4 border-t border-gray-100">
        <div className="px-4 py-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div>
              <div className="flex px-4 py-3 border-b border-gray-200">
                <dt className="text-sm font-medium leading-6 text-gray-900 pr-5">
                  Client ID :
                </dt>
                <dd className="text-sm leading-6 text-gray-700">
                  {clientData.clientId}
                </dd>
              </div>
              <div className="flex px-4 py-3 border-b border-gray-200">
                <dt className="text-sm font-medium leading-6 text-gray-900 pr-5">
                  Project Name :
                </dt>
                <dd className="text-sm leading-6 text-gray-700">
                  {clientData.projectName}
                </dd>
              </div>
              <div className="flex px-4 py-3 border-b border-gray-200">
                <dt className="text-sm font-medium leading-6 text-gray-900 pr-5">
                  Type :
                </dt>
                <dd className="text-sm leading-6 text-gray-700">
                  {clientData.type}
                </dd>
              </div>
              <div className="flex px-4 py-3 border-b border-gray-200">
                <dt className="text-sm font-medium leading-6 text-gray-900 pr-5">
                  Booking Date :
                </dt>
                <dd className="text-sm leading-6 text-gray-700">
                  {clientData.bookingDate}
                </dd>
              </div>
            </div>
            {/* Right Column */}
            <div>
              <div className="flex px-4 py-3 border-b border-gray-200">
                <dt className="text-sm font-medium leading-6 text-gray-900 pr-5">
                  Venue :
                </dt>
                <dd className="text-sm leading-6 text-gray-700">
                  {clientData.venue}
                </dd>
              </div>
              <div className="flex px-4 py-3 border-b border-gray-200">
                <dt className="text-sm font-medium leading-6 text-gray-900 pr-5">
                  Contact :
                </dt>
                <dd className="text-sm leading-6 text-gray-700">
                  {clientData.contact}
                </dd>
              </div>
              <div className="flex px-4 py-3 border-b border-gray-200">
                <dt className="text-sm font-medium leading-6 text-gray-900 pr-5">
                  Address :
                </dt>
                <dd className="text-sm leading-6 text-gray-700">
                  {clientData.address}
                </dd>
              </div>
              <div className="flex px-4 py-3 border-b border-gray-200">
                <dt className="text-sm font-medium leading-6 text-gray-900 pr-5">
                  Date :
                </dt>
                <dd className="text-sm leading-6 text-gray-700">
                  {clientData.date}
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
