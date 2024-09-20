import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import URL from '../Config/config';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const location = useLocation();
  const currentPath = location.pathname;



  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Send login request to backend
      let response
      if (currentPath === '/admin-login') {
        response = await axios.post(URL.ADMIN_LOGIN(), { username, password });
      }

      if (currentPath === '/login') {
        response = await axios.post(URL.STUDIO_LOGIN(), { username, password });
      }
      const { token } = response.data;

      if (currentPath === '/login') {
        // Save JWT to localStorage
        localStorage.setItem('authToken', token);
        navigate('/');
      }
      if (currentPath === '/admin-login') {
        // Save JWT to localStorage
        localStorage.setItem('authToken', token);
        navigate('/admin');
      }
    } catch (error) {
      setError('Invalid login credentials');
    }
  };

  return (
    <div className='flex justify-center items-center'>
      <div className='w-[600px] mt-[180px] border px-5 py-10 rounded'>
        <h2 className='text-center'>Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className='flex justify-center items-center'>
          <form onSubmit={handleLogin} className='mt-5'>
            <div>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={{ border: "1px solid black", padding: 5, marginBottom: 12, borderRadius: 8, paddingLeft: 12 }}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ border: "1px solid black", padding: 5, marginBottom: 12, borderRadius: 8, paddingLeft: 12 }}
              />
            </div>
            <div className='flex justify-center items-center'>
              <button type="submit" className='bg-indigo-600 border text-white px-6 py-2 hover:bg-indigo-800 rounded-full'>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;