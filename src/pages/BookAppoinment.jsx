import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "../pagesCss/BookAppointment.css"; // CSS for your form

const BookAppointment = () => {
  const navigate = useNavigate();
  
  // Form fields
  const [appointmentDate, setAppointmentDate] = useState('');
  const [reasonForVisit, setReasonForVisit] = useState('');
  const [doctor, setDoctorName] = useState(''); // Doctor's name entered manually
  const [patient, setPatientName] = useState(''); // Patient's name entered manually
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newAppointment = {
      doctor,        // Manually entered doctor's name
      patient,   
      status: "pending",    // Manually entered patient's name
      reasonForVisit,
      appointmentDate,
    };

    try {
      const response = await fetch('http://localhost:8080/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAppointment),
      });

      if (!response.ok) {
        throw new Error('Failed to create appointment');
      }

      const data = await response.json();
      console.log('Appointment created successfully:', data);

      // Redirect to My Appointment page after successful submission
      navigate('/patient-dashboard/myAppointment');
    } catch (error) {
      console.error('Error creating appointment:', error);
      setError('Failed to create appointment. Please try again.');
    }
  };

  return (
    <div className="appointment-form">
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Patient Name:</label>
          <input
            type="text"
            value={patient}
            onChange={(e) => setPatientName(e.target.value)}
            required
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label>Doctors Name:</label>
          <input
            type="text"
            value={doctor}
            onChange={(e) => setDoctorName(e.target.value)}
            required
            placeholder="Enter doctor's name"
          />
        </div>
        <div>
          <label>Appointment Date:</label>
          <input
            type="datetime-local"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Reason for Visit:</label>
          <input
            type="text"
            value={reasonForVisit}
            onChange={(e) => setReasonForVisit(e.target.value)}
            required
            placeholder="Reason for visit"
          />
        </div>
        <button type="submit">Book Appointment</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default BookAppointment;
