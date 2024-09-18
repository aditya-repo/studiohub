import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axiosInstance from '../Config/axiosConfig';
import URL from '../Config/config';
import Admin from '../Core/Admin';

const ProtectedRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const checkAuth = async () => {
      try {
        // The Axios instance automatically attaches the token
        await axiosInstance.get(URL.GET_DASHBOARD_DETAILS());

        // If token is valid, set authentication state to true
        setIsAuthenticated(true);
      } catch (error) {
        // If token is invalid or not provided, set authentication to false
        setIsAuthenticated(false);
      } finally {
        // Finish the loading state
        setLoading(false);
      }
    };

    checkAuth();
  }, []);


  if (loading) {
    return <p>Loading...</p>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin-login" replace />;
  }

  return <Admin />;
};

export default ProtectedRoute;
