import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Studio from './Core/Studio';
import Home from './Pages/Home';

import './index.css';
import { ClientDetails, AdminClientNavigation } from './Core/ClientDetails';
import ClientCard from './Pages/ClientInfo';
import CloudCard from './Pages/CloudUpload';
import ALlInviteList from './Pages/Invites';
import ClientDataApi from './Pages/ClientData';
// import Admin from './Core/Admin';
import AdminHome from './Admin/Home';
import AdminInfo from './Admin/AdminInfo';
import StudioDetails from './Core/StudioDetails';
import ServiceCard from './Pages/Service';
import ClientList from './Admin/ClientList';
import ProtectedRoute from './Auth/ProtectedRoute';
import Login from './Auth/Login';

// Creating the router structure using React Router v6
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Main route with Studio layout */}
      <Route path="/" element={<Studio />}>
        <Route index element={<Home />} />
        <Route path=":clientid" element={<ClientDetails />}>
          <Route path="client-info" element={<ClientCard />} />
          <Route path="service" element={<ServiceCard />} />
          <Route path="cloud" element={<CloudCard />} />
          <Route path="invites" element={<ALlInviteList />} />
          <Route path="process-update" element={<ClientCard />} />
          <Route path="client-data" element={<ClientDataApi />} />
        </Route>
      </Route>

      {/* Admin routes with nested paths for managing studios and clients */}
      <Route path="/admin" element={<ProtectedRoute />}>
        <Route index element={<AdminHome />} />
        <Route path=":studio" element={<StudioDetails />}>
          <Route path="info" element={<AdminInfo />} />
          <Route path="clients" element={<ClientList />} />
          <Route path="client/:clientid" element={<AdminClientNavigation />}>
            <Route path="client-info" element={<ClientCard />} />
            <Route path="service" element={<ServiceCard />} />
            <Route path="cloud" element={<CloudCard />} />
            <Route path="invites" element={<ALlInviteList />} />
            <Route path="process-update" element={<AdminInfo />} />
            <Route path="client-data" element={<ClientDataApi />} />
          </Route>
        </Route>
      </Route>
      
      <Route path="/login" element={<Login />} />
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
