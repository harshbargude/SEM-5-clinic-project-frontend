import { useParams, Link, Route, Routes } from "react-router-dom";
import { clinics } from "../JSON/Clinic"; // Importing the clinic data
import "../pagesCss/ClinicDetails.css";
import BookAppointment from "./BookAppoinment";

export function ClinicDetails() {
    const { clinicId } = useParams(); // Get clinicId from URL
    const clinic = clinics.find(c => c.clinicId === parseInt(clinicId));

    if (!clinic) {
        return <div>Clinic not found!</div>;
    }

    return (
        <div className="clnicDel_div">
            <h2>{clinic.clinicName}</h2>
            <h3>Doctors</h3>
            <div className="doctor-list">
                {clinic.doctors.map(doctor => (

                    <div key={doctor.doctorId} className="doctor-item">
                        <div>

                            <p>Name: <strong>{doctor.doctorName}</strong> <br />specialization - {doctor.specialization}</p>
                            <p>Contact: {doctor.contactNumber}</p>
                            <p>Email: {doctor.email}</p>
                            <Link to={`bookappointment`} className="link">Book Appointment</Link>
                        </div>
                    </div>

                ))}
            </div>
            <div className="detail_clin_h">
                <h3 className="DetailsH3">Details of Clinic</h3>
                <p><strong>Address:</strong> {clinic.address}</p>
                <p><strong>Contact Number:</strong> {clinic.contactNumber}</p>
                <p><strong>Email:</strong> {clinic.email}</p>
                <p><strong>Specialization:</strong> {clinic.specialization}</p>
                <p><strong>Opening Hours:</strong> {clinic.openingHours}</p>
                <Link to="/patient-dashboard/clinics">Back to Clinic List</Link>
                <Routes>
                    <Route path="/bookappointment" element={<BookAppointment />} />

                    {/* <Route path="/book-appointment/:doctorId/*" element={<BookAppointment />} /> */}
                </Routes>
            </div>

        </div>


    );
}
