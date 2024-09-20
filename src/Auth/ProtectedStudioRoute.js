import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import URL from '../Config/config';
import axiosStudioInstance from '../Config/axiosStudioConfig';
import Studio from '../Core/Studio';

const ProtectedStudioRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const checkAuth = async () => {
      try {
        // The Axios instance automatically attaches the token
        await axiosStudioInstance.get(URL.GET_STUDIO_DASHBOARD());

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
    return <Navigate to="/login" replace />;
  }

  return <Studio />;
};

export default ProtectedStudioRoute;
