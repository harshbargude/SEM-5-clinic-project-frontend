// import React from 'react'

import { useEffect } from "react";
import { useNavigate , Link, Route, Routes} from "react-router-dom";
import Dashboard from "./ClinicPages/Dashboard";
import Appointment from "./ClinicPages/Appointment";
import MyProfile from "./ClinicPages/MyProfile";
import MyClinic from "./ClinicPages/Myclinic";
import Chats from "./ClinicPages/Chats";
import "./ClinicApp.css"

function ClinicDashboard (){

  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('userRole');  // Clear user session
    navigate('/');
  }
  useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    
    // Redirect to login if not a clinic user
    if (!userRole || userRole !== 'clinic') {
      navigate('/');
    }
  }, [navigate]);

  

  return (
    <div>
      {/* <button onClick={handleLogout}>Logout</button> */}
      <div className="sidebar">
          {/* Sidebar Navigation */}
          <nav>
            <ul>
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li>
                <Link to="/clinic-dashboard/appointment">Appointment</Link>
              </li>
              <li>
                <Link to="/clinic-dashboard/myprofile">Doctors</Link>
              </li>
              <li>
                <Link to="/clinic-dashboard/myclinic">My Clinic</Link>
              </li>
              <li>
                <Link to="/clinic-dashboard/chats">Chat Option</Link>
              </li>
              <li>
              <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <Routes>
            <Route path="/*" element={<Dashboard />} />
            <Route path="/appointment/*" element={<Appointment />} />
            <Route path="/myprofile/*" element={<MyProfile />} />
            <Route path="/myclinic/*" element={<MyClinic />} />
            <Route path="/chats/*" element={<Chats />} />
          </Routes>
        </div>
    </div>
  )
}

export default ClinicDashboard
