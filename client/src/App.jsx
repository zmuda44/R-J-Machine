
import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import AdminNavbar from './components/Admin-navbar'
import Footer from './components/Footer';
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
    <p style={{ textAlign: 'center', margin: '10px 0' }}>See below for example of a machine shop webpage. Potential customers can view info about the company and submit for an estimate. 
    The website also has an admin section. To view admin section, click <Link to="/admin">here</Link></p>
    {window.location.pathname.startsWith('/admin') ? <AdminNavbar /> : <Header /> }
    <Outlet />
    <Footer />
    </div>
  )
}

export default App
