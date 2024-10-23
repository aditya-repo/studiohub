import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import URL from '../../Config/config';
import axiosStudioInstance from '../../Config/axiosStudioConfig';

const ServiceInfo = () => {
  const { clientid } = useParams();
  const [isActive, setIsActive] = useState(false);
  const [packages, setPackages] = useState({ cloudpackage: '', maxupload: 0 });
  const [formData, setFormData] = useState({ packagetype: '', maxupload: 0 });

  // Fetch data when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axiosStudioInstance.get(URL.GET_CLIENT_SERVICE(clientid));
        if (result.data) {
          setPackages(result.data);
          setFormData({
            packagetype: result.data.cloudpackage || '',
            maxupload: result.data.maxupload || 0
          });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [clientid]);

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosStudioInstance.post(
        URL.POST_CREATE_SINGLE_CLIENT_SERVICE(clientid),
        { packagetype: formData.packagetype, maxupload: formData.maxupload }
      );
      setPackages(response.data); // Update packages with the response
      setIsActive(false); // Close form
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  // Input change handler for select dropdown
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // If package type is selected, update both package type and maxupload
    if (name === 'packagetype') {
      const selectedPackage = value;
      let newMaxUpload = 0;

      // Set maxupload based on selected package
      if (selectedPackage === 'silver') newMaxUpload = 10;
      if (selectedPackage === 'gold') newMaxUpload = 20;
      if (selectedPackage === 'platinum') newMaxUpload = 40;

      setFormData((prev) => ({
        ...prev,
        packagetype: selectedPackage,
        maxupload: newMaxUpload, // Update maxupload when package changes
      }));
    } else {
      // Handle other inputs if necessary
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const packageOptions = ['silver', 'gold', 'platinum'];

  return (
    <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-md mb-5">
      <div className="flex items-center justify-between">
        <h3 className="text-xl pb-2">Services</h3>
        <button
          onClick={() => setIsActive(!isActive)}
          className="bg-purple-600 px-3 py-2 text-sm text-white rounded-md hover:bg-purple-800"
        >
          {isActive ? 'Cancel' : 'Select'}
        </button>
      </div>

      {isActive ? (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Occasion</label>
              <select
                name="packagetype"
                value={formData.packagetype} // Bind value to formData.packagetype
                onChange={handleInputChange}  // Handle select change
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              >
                <option value="" disabled>Select Package</option>
                {packageOptions.map(option => (
                  <option key={option} value={option}>
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Max Upload (GB)</label>
              <input
                type="number"
                name="maxupload"
                value={formData.maxupload}  // Bind maxupload to formData
                onChange={handleInputChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                disabled
              />
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
          {/* Display selected service details */}
          <div className="px-4 sm:px-6">
            {packageOptions.includes(packages.cloudpackage) ? (
              <Template cloud={packages.cloudpackage} setFormData={setFormData} />
            ) : (
              <NotAvailable />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceInfo;

const Template = ({ cloud, setFormData }) => {
  const [data, setCloudData] = useState({ packagetype: '', maxupload: 0, pricing: '', total: 0 });

  useEffect(() => {
    const cloudPackageData = {
      silver: { packagetype: 'Silver', maxupload: 5, pricing: 400, total: 2400 },
      gold: { packagetype: 'Gold', maxupload: 20, pricing: 500, total: 3000 },
      platinum: { packagetype: 'Platinum', maxupload: 40, pricing: 650, total: 3900 }
    };

    if (cloudPackageData[cloud]) {
      const packageDetails = cloudPackageData[cloud];
      setCloudData(packageDetails);

      // Update maxupload in formData when cloud changes
      setFormData(prev => ({ ...prev, maxupload: packageDetails.maxupload }));
    }
  }, [cloud, setFormData]);

  return (
    <div className='border w-full mt-4 rounded-md py-4 px-6'>
      <div className='flex justify-between mb-3'>
        <p className='text-lg'><span className='font-bold pr-3'>Package Type:</span> {data.packagetype}</p>
        <p className='text-lg'><span className='font-bold pr-3'>Max upload size:</span> {data.maxupload} GB</p>
      </div>
      <p><span className='font-bold pr-3'>Details:</span></p>
      <ul style={{ listStyle: 'square' }} className='ml-6'>
        <li>Images & videos optimal compression with up to 80% reduced size with minimal quality compromise.</li>
        <li>Access data anywhere via Android, iOS, and Android TV apps.</li>
        <li>Public folder with QR code for easy uploads.</li>
        <li>Facewise photo grouping.</li>
        <li>(Future) Guest access via face recognition.</li>
      </ul>
      <div className='flex justify-between mb-3 mt-5'>
        <p className='text-lg'><span className='font-bold pr-3'>Pricing:</span> ₹{data.pricing} / month</p>
        <p className='text-lg'><span className='font-bold pr-3'>Minimum:</span> 6 months</p>
        <p className='text-lg'><span className='font-bold pr-3'>Total Amount:</span> ₹{data.total}</p>
      </div>
    </div>
  );
};

const NotAvailable = () => {
  return (
    <div className='flex px-5 justify-center py-3'>
      <p>Not Selected Yet</p>
    </div>
  );
};
