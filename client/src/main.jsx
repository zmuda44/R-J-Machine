// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { createRoot } from 'react-dom'
import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createBrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx'
import './index.css'



import Home from './pages/Home'
import Products from './pages/Products'
import Services from './pages/Services'
import ContactUs from './pages/Contact-us'
import AdminLogin from './pages/Admin-login'
import Admin from './pages/Admin'
import IndividualProject from './pages/Project'
import NotFound from './pages/Not-Found';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
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

// ReactDOM.render(
//   // <React.StrictMode>
//       <BrowserRouter>
//           <Routes>              
//               <Route path="/products" element={<Products />} />
//               <Route path="/services" element={<Services />} />
//               <Route path="/contact-us" element={<ContactUs/>} />
//               <Route path="/" element={<Home/>} />
//           </Routes>
//       </BrowserRouter>
//   // </React.StrictMode>
// ,document.getElementById('root'));

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <Router>
//     <Routes>
//       <Route path="/" element={<App />}>
//         <Route index element={<Home />} /> {/* Default route */}
//         <Route path="admin" element={<AdminLogin />} />
//         <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
//       </Route>
//     </Routes>
//   </Router>
// );