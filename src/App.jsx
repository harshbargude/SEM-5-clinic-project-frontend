import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import ClinicDashboard from './ClinicDashboard';
import PatientDashboard from './PatientDashboard';


function App() {
  return (
    <Routes>
      {/* Default route for login */}
      <Route path="/" element={<Login />} />

      {/* Clinic Dashboard route */}
      <Route path="/clinic-dashboard/*" element={<ClinicDashboard />}/>

      {/* Patient Dashboard route */}
      <Route path="/patient-dashboard/*" element={<PatientDashboard />} />
    </Routes>
  );
}

export default App;
