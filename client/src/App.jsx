
import { useState } from 'react'

import './App.css'
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import AdminNavbar from './components/Admin-navbar'
import Footer from './components/Footer';


function App() {
  return (
    <div>
    <p style={{ textAlign: 'center', margin: '10px 0' }}>See below for example of a machine shop webpage. Potential customers can view info about the company and submit for an estimate. 
    The website also has an admin section. To view admin section, click <a href="/admin">here</a></p>
    {window.location.pathname.startsWith('/admin') ? <AdminNavbar /> : <Navbar /> }
    <Outlet />
    <Footer />
    </div>
  )
}

export default App
