import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Studio from './Core/Studio';
import Home from './Pages/Home';

import './index.css'
import ClientDetails from './Core/ClientDetails';
import ClientCard from './Pages/ClientInfo';
import CloudCard from './Pages/CloudUpload';
import ALlInviteList from './Pages/Invites';
import ClientDataApi from './Pages/ClientData';
import ProcessUpdate from './Pages/process-update';



const router = createBrowserRouter(
  createRoutesFromElements(
      <>
      <Route path='/' element={<Studio />}>
        <Route path='/' element={<Home />} />
        <Route path='/:clientid' element={<ClientDetails/>}>
          <Route path='/:clientid/client-info' element={<ClientCard />} />
          <Route path='/:clientid/cloud' element={<CloudCard />} />
          <Route path='/:clientid/invites' element={<ALlInviteList />} />
          <Route path='/:clientid/process-update' element={<ProcessUpdate />} />
          <Route path='/:clientid/client-data' element={<ClientDataApi />} />
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
