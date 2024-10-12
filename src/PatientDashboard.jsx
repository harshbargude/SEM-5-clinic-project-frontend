import { Link, Route, Routes, useNavigate } from "react-router-dom"
import { Home } from "./pages/Home"
import './App.css'
import "./pagesCss/ClinicList.scss";
import { ClinicList } from "./pages/ClinicList"
import { ClinicDetails } from "./pages/ClinicDetails"
import { ProfileManagement } from "./pages/profileManagement"
import NewIllness from "./pages/NewIllness"
import HomeI from './Icons/Home.svg';
import ClinicI from './Icons/Key.svg';
import PmI from './Icons/User.svg';
import AppointmentI from './Icons/File text.svg';
import IllnessRegI from './Icons/Plus circle.svg';
import { useEffect } from "react";
import BookAppointment from "./pages/BookAppoinment";
import MyAppointment from "./pages/MyAppointment";

function PatientDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const userRole = localStorage.getItem('userRole');

    // Redirect to login if not a patient user
    if (!userRole || userRole !== 'patient') {
      navigate('/');
    }
  }, [navigate]);

  function handleLogout() {
    localStorage.removeItem('userRole');  // Clear user session
    navigate('/');
  }

  return (
    <>
      <section>
        <div className='topSection'>

        </div>
      </section>
      <section className='SectionContent-h'>
        <div className="SectionDivContent-h">

          <div className="OneLeft">
            <nav>
              <ul>
                <li><div className='Nav_iconDiv btn btn--liquidBtn'><span><img src={HomeI} alt="Home Icon" style={{ width: '24px', height: '24px' }} /><Link to='/patient-dashboard'>Dashboard</Link></span><div className="btn--liquidBtn--liquid" /></div></li>
                <li><div className='Nav_iconDiv btn btn--liquidBtn'> <span><img src={ClinicI} alt="Clinic Icon" style={{ width: '24px', height: '24px' }} /><Link to='/patient-dashboard/clinics'>Clinic</Link></span><div className="btn--liquidBtn--liquid" /></div></li>
                <li><div className='Nav_iconDiv btn btn--liquidBtn'> <span><img src={PmI} alt="Profile Icon" style={{ width: '24px', height: '24px' }} /><Link to='/patient-dashboard/profileManagement'>Profile Management</Link></span><div className="btn--liquidBtn--liquid" /></div></li>
                <li><div className='Nav_iconDiv btn btn--liquidBtn'><span><img src={AppointmentI} alt="Appointment Icon" style={{ width: '24px', height: '24px' }} /><Link to='/patient-dashboard/myAppointment'>My Appointment</Link></span><div className="btn--liquidBtn--liquid" /></div></li>
                <li><div className='Nav_iconDiv btn btn--liquidBtn'><span><img src={IllnessRegI} alt="IllnessRegI Icon" style={{ width: '24px', height: '24px' }} /><Link to='/patient-dashboard/newIllness'>Illness Registration</Link></span><div className="btn--liquidBtn--liquid" /></div></li>
                <li><div className='Nav_iconDiv btn btn--liquidBtn'><span><button className="logbtn_hh" onClick={handleLogout}>Logout</button></span><div className="btn--liquidBtn--liquid" /></div></li>
              </ul>
            </nav>
          </div>
          <div className="OneRight">
            <div className="Container_Right">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path= 'clinics/*' element={<ClinicList />} />
                <Route path="clinic/:clinicId/*" element={<ClinicDetails />} />
                <Route path="clinic/:clinicId/bookappointment" element={<BookAppointment />} />
                <Route path="myAppointment" element={<MyAppointment />} />
                <Route path="profileManagement" element={<ProfileManagement />} />
                <Route path="newIllness" element={<NewIllness />} />
              </Routes>
            </div>
          </div>
        </div>

      </section>


    </>
  )
}

export default PatientDashboard
