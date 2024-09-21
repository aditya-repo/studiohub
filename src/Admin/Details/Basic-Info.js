import React, { useEffect, useState } from 'react';
import EditModal from './Edit-Basic';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../Config/axiosConfig';
import URL from '../../Config/config';

const BasicInfo = ({ clientData }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleEditClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };


  const [studio, setStudio] = useState({})

  const { studiocode } = useParams()

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance(URL.GET_STUDIO_BASIC_INFO(studiocode))
        setStudio(response.data)
      } catch (error) {
        console.error("Something went wrong", error)
      }
    }
    fetchData()
  }, [studiocode, isModalOpen])

  

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
                    {studio.name}
                </h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                    <span className="font-bold">Services:</span> {studio.description}
                </p>
            </div>

            {/* Modal Component */}
            {isModalOpen && <EditModal studio={studio} onClose={handleCloseModal} />}

            {/* Rest of the component */}
            <div className="mt-4 border-t border-gray-100">
                <div className="px-4 py-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Left Column */}
                        <div>
                            <div className="flex px-4 py-3 border-b border-gray-200">
                                <dt className="text-sm font-medium leading-6 text-gray-900 pr-5">
                                    Studio Code :
                                </dt>
                                <dd className="text-sm leading-6 text-gray-700">
                                    {studio.studiocode}
                                </dd>
                            </div>
                            <div className="flex px-4 py-3 border-b border-gray-200">
                                <dt className="text-sm font-medium leading-6 text-gray-900 pr-5">
                                    Manager Name:
                                </dt>
                                <dd className="text-sm leading-6 text-gray-700">
                                    {studio.manager}
                                </dd>
                            </div>
                            <div className="flex px-4 py-3 border-b border-gray-200">
                                <dt className="text-sm font-medium leading-6 text-gray-900 pr-5">
                                    Username :
                                </dt>
                                <dd className="text-sm leading-6 text-gray-700">
                                    {studio.userid}
                                </dd>
                            </div>
                            <div className="flex px-4 py-3 border-b border-gray-200">
                                <dt className="text-sm font-medium leading-6 text-gray-900 pr-5">
                                    Location :
                                </dt>
                                <dd className="text-sm leading-6 text-gray-700">
                                    {studio.location}
                                </dd>
                            </div>
                        </div>
                        {/* Right Column */}

                        <div>
                            <div className="flex px-4 py-3 border-b border-gray-200">
                                <dt className="text-sm font-medium leading-6 text-gray-900 pr-5">
                                    Contact 1 :
                                </dt>
                                <dd className="text-sm leading-6 text-gray-700">
                                    {studio.contact1}
                                </dd>
                            </div>
                            <div className="flex px-4 py-3 border-b border-gray-200">
                                <dt className="text-sm font-medium leading-6 text-gray-900 pr-5">
                                    Contact 2 :
                                </dt>
                                <dd className="text-sm leading-6 text-gray-700">
                                    {studio.contact2}
                                </dd>
                            </div>
                            <div className="flex px-4 py-3 border-b border-gray-200">
                                <dt className="text-sm font-medium leading-6 text-gray-900 pr-5">
                                    Whatsapp :
                                </dt>
                                <dd className="text-sm leading-6 text-gray-700">
                                    {studio.whatsapp}
                                </dd>
                            </div>
                            <div className="flex px-4 py-3 border-b border-gray-200">
                                <dt className="text-sm font-medium leading-6 text-gray-900 pr-5">
                                    Email :
                                </dt>
                                <dd className="text-sm leading-6 text-gray-700">
                                    {studio.email}
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
