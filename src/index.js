import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Studio from './Core/Studio';
import Home from './Pages/Home';

import './index.css'
import ClientDetails from './Pages/ClientDetails';
import ClientCard from './_components/Details/ClientInfo';



const router = createBrowserRouter(
  createRoutesFromElements(
      <>
      <Route path='/' element={<Studio />}>
        <Route path='/' element={<Home />} />
        <Route path='/:clientid' element={<ClientDetails/>}>
          <Route path='/:clientid/client-info' element={ClientCard} />
        </Route>
      </Route>
      </>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
