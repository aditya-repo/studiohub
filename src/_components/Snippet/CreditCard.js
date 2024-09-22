import React, { useEffect, useState } from 'react';
import axiosInstance from '../../Config/axiosConfig';
import URL from '../../Config/config';
import { useParams } from 'react-router-dom';

const CreditCard = () => {
  const [isActive, setIsActive] = useState(true);
  const { studiocode } = useParams();
  const [wallet, setWallet] = useState({});
  const [formData, setFormData] = useState({ amount: '' });

  // Fetch wallet data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(URL.GET_ADMIN_SINGLE_STUDIO_CREDIT(studiocode));
        setWallet(response.data);
        setFormData({ amount: response.data.amount || '' });  // Initialize form with wallet amount
      } catch (error) {
        console.error('Error fetching wallet data:', error);
      }
    };

    fetchData();
  }, [studiocode]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(
        URL.POST_ADMIN_SINGLE_STUDIO_CREDIT(studiocode),
        { amount: formData.amount }
      );
      setWallet(response.data);  // Update wallet after successful post
      toggleActiveStatus();  // Close the form
    } catch (error) {
      console.error('Error updating wallet:', error);
    }
  };

  // Toggle between showing the credit and update form
  const toggleActiveStatus = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  return (
    <div className="p-4 bg-white shadow rounded-md border bg-gray-100">
      <div className="flex justify-between items-center">
        <div className="header text-xl">Credit</div>
        <div
          className="bg-indigo-600 hover:bg-indigo-800 rounded-full px-5 py-1 text-white cursor-pointer"
          onClick={toggleActiveStatus}
        >
          Update
        </div>
      </div>

      {isActive ? (
        <p className="text-center text-5xl mt-10 mb-10">{wallet.amount}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4">
            <div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Add Credit</label>
                <input
                  type="text"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
            </div>
            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md">
              Save
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default CreditCard;
