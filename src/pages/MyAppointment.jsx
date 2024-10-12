import { useEffect, useState } from "react";
import "../pagesCss/MyAppointment.css"

const MyAppointment = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/appointment")
      .then((res) => res.json())
      .then((result) => setAppointments(result));
    console.log(appointments);
  }, []);

  return (
    <div>
      <h1>My Appointments</h1>
      <table className="appointmentTable">
        <thead>
          <tr>
            <th>Appointment ID</th>
            <th>Patient name</th>
            <th>Doctor</th>
            <th>Reason for Visit</th>
            <th>Appointment Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.appointmentId} className="appointmentList_h">
              <td>{appointment.appointmentId}</td>
              <td>{appointment.patient}</td>
              <td>{appointment.doctor}</td>
              <td>{appointment.reasonForVisit}</td>
              <td>{new Date(appointment.appointmentDate).toLocaleString()}</td>
              <td>{appointment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default MyAppointment
