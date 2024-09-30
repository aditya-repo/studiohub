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
      setIsActive(false);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleInputChange = (e) => {
    setPackages(e.target.value);  // Directly update the selected package
  };

  const arraylist = ['silver', 'gold', 'platinum']

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
              <label className="block text-sm font-medium text-gray-700">Occassion</label>
              <select
                name="packagetype"
                value={packages}
                onChange={handleInputChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              >
                <option value="" selected>Select Package</option>
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
            { arraylist.includes(packages.cloud) ? (<Template cloud={packages.cloud} />) : (<NotAvailable />)}

          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceInfo;

// `${packages.cloud}`

const Template = ({ cloud }) => {

  const [data, setCloudData] = useState({ packagetype: '', maxupload: '', pricing: '' })

  useEffect(() => {
    const subscription = (cloud) => {
      if (cloud === 'silver') {
        setCloudData({
          packagetype: 'Silver',
          maxupload: '10 GB',
          pricing: 400,
          total: 2400,
        })
      }
      if (cloud === 'gold') {
        setCloudData({
          packagetype : 'Gold',
          maxupload : '20 GB',
          pricing : 500,
          total : 3000,})
      }
      if (cloud === 'platinum') {
        setCloudData({
          packagetype : 'Platinum',
          maxupload : '40 GB',
          pricing : 650,
          total : 3900,})
      }
    }
    subscription(cloud)
  })

  return (
    <div className='border w-[100%] mt-4 rounded-md py-4 px-6'>
      <div className='flex justify-between mb-3'>
        <p className='text-lg'><span className='font-bold pr-3'>Package Type : </span> {data.packagetype}</p>
        <p className='text-lg'> <span className='font-bold pr-3'>Max upload size :</span>{data.maxupload}</p>
      </div>
      <p><span className='font-bold pr-3'>Details :</span> </p>
      <ul style={{ listStyle: "square" }} className='ml-6'>
        <li>Images & videos optimal compression with upto 80% reduced size with minimal quality compromising.</li>
        <li>User data accessible anywhere anytime through Android phone, IOS and Android TV app.</li>
        <li>Public Folder to upload by anyone during occassion by scanning easy QR Code.</li>
        <li>Facewise photos group list</li>
        <li>(In Future) Guest user access via Face recoginition.</li>
      </ul>
      <div className='flex justify-between mb-3 mt-5'>
        <p className='text-lg'><span className='font-bold pr-3'>Pricing : </span> ₹{data.pricing} / month</p>
        <p className='text-lg'> <span className='font-bold pr-3'>Minimum :</span>6 months</p>
        <p className='text-lg'> <span className='font-bold pr-3'>Total Amount :</span>₹{data.total}</p>
      </div>
    </div>
  )
}



const NotAvailable = () => {

  return (
    <div className='flex px-5 justify-center py-3'>
      <p>Not Selected Yet</p>
    </div>
  )
}