import React, { useState } from 'react';
import EditModal from './Edit-Basic';

const BasicInfo = ({ clientData }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleEditClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    console.log(clientData);
    

    return (
        <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-lg mb-5 relative">
            <button
                onClick={handleEditClick}
                className="bg-indigo-600 px-4 py-1 text-white rounded-md hover:bg-indigo-800 top-4 right-4 absolute"
            >
                Edit
            </button>

            <div className="px-4 py-4 sm:px-6">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                    {clientData.clientname}
                </h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                    <span className="font-bold">Services:</span> {clientData.description}
                </p>
            </div>

            {/* Modal Component */}
            {isModalOpen && <EditModal clientData={clientData} onClose={handleCloseModal} />}

            {/* Rest of the component */}
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
                                    Occassion:
                                </dt>
                                <dd className="text-sm leading-6 text-gray-700">
                                    {clientData.occassionname}
                                </dd>
                            </div>
                            <div className="flex px-4 py-3 border-b border-gray-200">
                                <dt className="text-sm font-medium leading-6 text-gray-900 pr-5">
                                    Type :
                                </dt>
                                <dd className="text-sm leading-6 text-gray-700">
                                    {clientData.occassiontype}
                                </dd>
                            </div>
                            <div className="flex px-4 py-3 border-b border-gray-200">
                                <dt className="text-sm font-medium leading-6 text-gray-900 pr-5">
                                    Booking Date :
                                </dt>
                                <dd className="text-sm leading-6 text-gray-700">
                                    {clientData.occassiondate}
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

export default BasicInfo;
