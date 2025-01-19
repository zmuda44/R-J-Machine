import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import { createRoot } from 'react-dom'
import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home'
import Products from './pages/Products'
import Services from './pages/Services'
import ContactUs from './pages/Contact-us'
import AdminLogin from './pages/Admin-login'
import Admin from './pages/Admin'
import IndividualProject from './pages/Project'
// import NotFound from './pages/Not-Found';




const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: '/admin',
        element: <AdminLogin />
      },
      {
        path: 'admin/user',
        element: <Admin />
      },
      {
        path: '/admin/projects/:projectId',
        element: <IndividualProject />
      },
      {
        path: '/contact-us',
        element: <ContactUs />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
