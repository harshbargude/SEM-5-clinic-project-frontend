import { useState, useEffect } from 'react';
import '../ClinicPagesCss/Chats.css';

const Appointment = () => {
    const [appointments, setAppointments] = useState([]);
    const [error, setError] = useState(null);

    // Fetch appointments from the API
    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await fetch('http://localhost:8080/appointment');
                if (!response.ok) {
                    throw new Error('Failed to fetch appointments');
                }
                const data = await response.json();
                setAppointments(data); // Set the appointments in state
            } catch (error) {
                setError('Failed to load appointments');
                console.error(error);
            }
        };

        fetchAppointments();
    }, []);

    // Handle Approve action
    const handleApprove = async (id) => {
        updateAppointmentStatus(id, 'approved');
    };

    // Handle Reject action
    const handleReject = async (id) => {
        updateAppointmentStatus(id, 'rejected');
    };

    // Function to update the appointment status
    const updateAppointmentStatus = async (id, newStatus) => {
        try {
            const updatedAppointment = appointments.find(appointment => appointment.appointmentId === id);

            if (!updatedAppointment) return;

            const updatedData = { ...updatedAppointment, status: newStatus };

            const response = await fetch(`http://localhost:8080/appointment/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData), // Send the updated status
            });

            if (!response.ok) {
                throw new Error('Failed to update appointment status');
            }

            // Update the local state after successful response
            setAppointments((prev) =>
                prev.map((appointment) =>
                    appointment.appointmentId === id ? { ...appointment, status: newStatus } : appointment
                )
            );
        } catch (error) {
            setError('Failed to update appointment status');
            console.error(error);
        }
    };

    if (error) {
        return <div>{error}</div>;
    }

    if (!appointments.length) {
        return <div>Loading appointments...</div>;
    }

    return (
        <div className="appointments-container">
            <h1>Appointments</h1>
            <table>
                <thead>
                    <tr>
                        <th>Patient Name</th>
                        <th>Doctor Name</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment) => (
                        <tr key={appointment.appointmentId}>
                            <td>{appointment.patient}</td>
                            <td>{appointment.doctor}</td>
                            <td>{new Date(appointment.appointmentDate).toLocaleString()}</td>
                            <td>{appointment.status}</td>
                            <td>
                                {appointment.status === 'pending' && (
                                    <>
                                        <button onClick={() => handleApprove(appointment.appointmentId)}>Approve</button>
                                        <button onClick={() => handleReject(appointment.appointmentId)}>Reject</button>
                                    </>
                                )}
                                {appointment.status !== 'pending' && <span>{appointment.status}</span>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Appointment;
