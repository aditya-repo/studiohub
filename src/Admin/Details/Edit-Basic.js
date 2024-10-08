import React, { useState } from 'react';
import axiosInstance from '../../Config/axiosConfig';
import URL from '../../Config/config';

const EditModal = ({ studio, onClose }) => {
  const [formData, setFormData] = useState(studio);  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Handle form submission logic (e.g., send data to the server)
      console.log('Form submitted:', formData);
  
      const response = await axiosInstance.post(
        URL.POST_STUDIO_BASIC_INFO(studio.studiocode),
        formData // Send formData directly
      );
      
      setFormData(response.data)
      onClose(); // Close modal after submission
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75 p-2">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl">
        <div className='flex justify-between'>
          <h2 className="text-lg font-semibold mb-4">Edit Studio Information</h2>
          <div className='px-2 cursor-pointer' onClick={onClose}>&#x274c;</div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Studio Code</label>
                <input
                  type="text"
                  name="studiocode"
                  value={formData.studiocode || ''}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Manager Name</label>
                <input
                  type="text"
                  name="manager"
                  value={formData.manager || ''}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">User ID</label>
                <input
                  type="text"
                  name="userid"
                  value={formData.userid || ''}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location || ''}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Contact 1</label>
                <input
                  type="text"
                  name="contact1"
                  value={formData.contact1 || ''}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Contact 2</label>
                <input
                  type="text"
                  name="contact2"
                  value={formData.contact2 || ''}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Whatsapp</label>
                <input
                  type="text"
                  name="whatsapp"
                  value={formData.whatsapp || ''}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email || ''}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description || ''}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            ></textarea>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
