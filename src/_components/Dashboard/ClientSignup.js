import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axiosInstance from '../../Config/axiosConfig';
import URL from '../../Config/config';

const ClientSignup = (props) => {
  const {onClose} = props
  const formik = useFormik({
    initialValues: {
      clientName: '',
      projectName: '',
      type: '',
      bookingDate: '',
      venue: '',
      contact: '',
      description: ''
    },
    validationSchema: Yup.object({
      clientName: Yup.string().required("Client Name is required"),
      projectName: Yup.string().required("Project Name is required"),
      type: Yup.string(),
      bookingDate: Yup.string().required("Booking Date is required"),
      venue: Yup.string(),
      contact: Yup.string().required("Contact is required"),
      description: Yup.string()
    }),
    onSubmit: async (values) => {
      console.log(values);

      try {
        const response = await axiosInstance.post(
          URL.POST_CREATE_SINGLE_CLIENT(),
          values
        );
        console.log('Form submitted:', response.data);
        onClose(false); // Close modal after submission
      } catch (error) {
        console.error('Error submitting form:', error);
        // Handle error (e.g., show an error message to the user)
      }
    }
  });

  console.log(onClose());
  

  return (
    <div className='flex justify-center items-center'>
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl w-[1000px]">
        <div className='flex justify-between'>
          <h2 className="text-lg font-semibold mb-4">Edit Studio Information</h2>
          <div className='px-2 cursor-pointer' onClick={onClose}>&#x274c;</div>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Client Name</label>
                <input
                  type="text"
                  name="clientName"
                  value={formik.values.clientName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
                {formik.touched.clientName && formik.errors.clientName && (
                  <div style={{ color: 'red', paddingTop: 4 }}>{formik.errors.clientName}</div>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Occasion</label>
                <input
                  type="text"
                  name="projectName"
                  value={formik.values.projectName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
                {formik.touched.projectName && formik.errors.projectName && (
                  <div style={{ color: 'red', paddingTop: 4 }}>{formik.errors.projectName}</div>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Type</label>
                <select
                  name="type"
                  value={formik.values.type}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                >
                  <option value="" label="Select type" disabled selected />
                  <option value="birthday" label="Birthday" />
                  <option value="engagement" label="Engagement" />
                  <option value="wedding" label="Wedding" />
                  <option value="party" label="Party" />
                  {/* Add more options as needed */}
                </select>
                {formik.touched.type && formik.errors.type && (
                  <div style={{ color: 'red', paddingTop: 4 }}>{formik.errors.type}</div>
                )}
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Booking Date</label>
                <input
                  type="date"
                  name="bookingDate"
                  value={formik.values.bookingDate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
                {formik.touched.bookingDate && formik.errors.bookingDate && (
                  <div style={{ color: 'red', paddingTop: 4 }}>{formik.errors.bookingDate}</div>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Contact</label>
                <input
                  type="text"
                  name="contact"
                  value={formik.values.contact}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
                {formik.touched.contact && formik.errors.contact && (
                  <div style={{ color: 'red', paddingTop: 4 }}>{formik.errors.contact}</div>
                )}
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Venue</label>
                <input
                  type="text"
                  name="venue"
                  value={formik.values.venue}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
                {formik.touched.venue && formik.errors.venue && (
                  <div style={{ color: 'red', paddingTop: 4 }}>{formik.errors.venue}</div>
                )}
              </div>

            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              rows="3" // Adjust the number of rows as needed
            />
            {formik.touched.description && formik.errors.description && (
              <div style={{ color: 'red', paddingTop: 4 }}>{formik.errors.description}</div>
            )}
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

export default ClientSignup;
