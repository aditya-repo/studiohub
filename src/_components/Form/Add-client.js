import React, { useState } from 'react'
import axiosInstance from '../../Config/axiosConfig';
import URL from '../../Config/config';
import { useParams } from 'react-router-dom';

const AddClientForm = ({onCloseForm}) => {

    const {studiocode} = useParams()



    const [formData, setFormData] = useState({
        clientName: '',
        projectName: '',
        type: '',
        bookingDate: '',
        address: '',
        venue: '',
        contact: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., send data to the server)
        console.log('Form submitted:', formData);
        // await axiosInstance.post(URL.POST_ADMIN_NEW_CLIENT(studiocode), {formData})
        onCloseForm(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl">
            <div className='flex justify-between'>
                <h2 className="text-lg font-semibold mb-4">Edit Client Information</h2>
                <div className='px-2'
                    onClick={onCloseForm}>&#x274c;</div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Client Name</label>
                            <input
                                type="text"
                                name="clientName"
                                value={formData.clientName}
                                onChange={handleInputChange}
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Occasion</label>
                            <input
                                type="text"
                                name="projectName"
                                value={formData.projectName}
                                onChange={handleInputChange}
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            />
                        </div>
                        <div className="">
                            <label className="block text-sm font-medium text-gray-700">Type</label>
                            <input
                                type="text"
                                name="type"
                                value={formData.type}
                                onChange={handleInputChange}
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Booking Date</label>
                            <input
                                type="date"
                                name="bookingDate"
                                value={formData.bookingDate}
                                onChange={handleInputChange}
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Venue</label>
                            <input
                                type="text"
                                name="venue"
                                value={formData.venue}
                                onChange={handleInputChange}
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Contact</label>
                            <input
                                type="text"
                                name="contact"
                                value={formData.contact}
                                onChange={handleInputChange}
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            />
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Address</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                </div>

                <div className="flex justify-end mt-6">
                    <button
                        type="button"
                        onClick={onCloseForm}
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
    )
}

export default AddClientForm