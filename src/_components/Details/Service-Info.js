import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import URL from '../../Config/config';
import axiosStudioInstance from '../../Config/axiosStudioConfig';

const ServiceInfo = () => {
  const { clientid } = useParams();
  const [isActive, setIsActive] = useState(false);
  const [packages, setPackages] = useState('');  // Default to empty string

  useEffect(() => {
    const fetchData = async () => {
      const result = await axiosStudioInstance.get(URL.GET_CLIENT_SERVICE(clientid));
      setPackages(result.data);  // Assuming `result.data` is the package data you need
    };
    fetchData();
  }, [clientid]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Form submitted:', packages);
      const response = await axiosStudioInstance.post(
        URL.POST_CREATE_SINGLE_CLIENT_SERVICE(clientid),
        { packagetype: packages } 
      );
      setPackages(response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }; 

  const handleInputChange = (e) => {
    setPackages(e.target.value);  // Directly update the selected package
  };

  return (
    <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-md mb-5">
      <div className="flex items-center justify-between">
        <h3 className="text-xl pb-2">Services</h3>
        <button 
          onClick={() => setIsActive(!isActive)} 
          className="bg-purple-600 px-3 py-2 text-sm text-white rounded-md hover:bg-purple-800"
        >
          {isActive ? 'Cancel' : 'Add New'}
        </button>
      </div>

      {isActive ? (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Occassion</label>
              <select
                name="packagetype"
                value={packages}
                onChange={handleInputChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              >
                <option value="" disabled selected>Select Package</option>
                <option value="silver">Silver</option>
                <option value="gold">Gold</option>
                <option value="platinum">Platinum</option>
              </select>
            </div>
            <button 
              type="submit" 
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800"
            >
              Submit
            </button>
          </div>
        </form>
      ) : (
        <div className="mt-4 border-t border-gray-100">
          {/* Display existing services */}
          <div className="px-4 sm:px-6">
            <div className="flex px-4 py-3 border-b border-gray-200">
              <dt className="text-sm font-medium leading-6 text-gray-900 pr-5">Cloud :</dt>
              <dd className="text-sm leading-6 text-gray-700">{packages !== null ?   `${packages.cloud}` : "No Package"}</dd>
            </div>
            {/* Add more service info here */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceInfo;
