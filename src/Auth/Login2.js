import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import URL from '../Config/config';

// Yup Validation Schema
const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  password: Yup.string().min(4, 'Password at least 4 characters').required('Password is required'),
});

const Login = () => {
  const [generalError, setGeneralError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  // Formik Setup
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      setGeneralError(''); // Reset general error
      try {
        let response;
        // Determine the correct API endpoint based on current path
        if (currentPath === '/admin-login') {
          response = await axios.post(URL.ADMIN_LOGIN(), values);
        } else if (currentPath === '/login') {
          response = await axios.post(URL.STUDIO_LOGIN(), values);
        }

        console.log(response);
        

        const { status, token, message, details } = response.data;

        setGeneralError(message)

        // Handle validation errors in the response
        if (status === 'validationerror') {
          details.forEach(({ path, msg }) => {
            setFieldError(path, msg); // Set specific field errors
          });
        } else if (token) {
          // Save JWT token and navigate if successful
          localStorage.setItem('authToken', token);
          navigate(currentPath === '/admin-login' ? '/admin' : '/');
        } else {
          setGeneralError(message || 'An unexpected error occurred');
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className='flex justify-center items-center'>
      <div className='w-[600px] mt-[180px] border px-5 py-10 rounded'>
        <h2 className='text-center'>Login</h2>
        {/* General error message */}
        <div className='flex justify-center mt-2'>{generalError && <small style={{ color: 'red' }}>{generalError}</small>}</div>
        
        
        <div className='flex justify-center items-center'>
          <form onSubmit={formik.handleSubmit} noValidate className='mt-5'>
            {/* Username Field */}
            <div className='mb-3'>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{
                  border: "1px solid black",
                  padding: 5,
                  borderRadius: 8,
                  paddingLeft: 12,
                }}
              />
              {/* Username error */}
              {formik.touched.username && formik.errors.username ? (
                <div style={{ color: 'red', paddingTop:4, paddingLeft: 8 }}>{formik.errors.username}</div>
              ) : null}
            </div>

            {/* Password Field */}
            <div className='mb-3'>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{
                  border: "1px solid black",
                  padding: 5,
                  borderRadius: 8,
                  paddingLeft: 12,
                }}
              />
              {/* Password error */}
              {formik.touched.password && formik.errors.password ? (
                <div style={{ color: 'red', paddingTop:4, paddingLeft: 8  }}>{formik.errors.password}</div>
              ) : null}
            </div>

            {/* Submit Button */}
            <div className='flex justify-center items-center'>
              <button
                type="submit"
                className='bg-indigo-600 border text-white px-6 py-2 hover:bg-indigo-800 rounded-full'
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? 'Logging in...' : 'Login'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
