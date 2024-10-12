import "../ClinicPagesCss/thirdoption.css";
import { doctorsData } from "../DummyData/doctorsData";
import "../ClinicPagesCss/adddoctor.css"
import  { useState } from 'react';

const AddDoctorForm = ({ onAddDoctor, onClose }) => {
    const [doctorData, setDoctorData] = useState({
        name: '',
        specialization: '',
        experience: '',
        email: '',
        phone: '',
        location: '',
        available_days: []
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDoctorData({
            ...doctorData,
            [name]: value
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onAddDoctor(doctorData); // Pass the new doctor's data to the parent component
        onClose(); // Close the form after submitting
    };

    return (
        <div className="add-doctor-form">
            <h2>Add New Doctor</h2>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Doctor's Name"
                    value={doctorData.name}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="specialization"
                    placeholder="Specialization"
                    value={doctorData.specialization}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="experience"
                    placeholder="Experience (years)"
                    value={doctorData.experience}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={doctorData.email}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={doctorData.phone}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={doctorData.location}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="available_days"
                    placeholder="Available Days (e.g., Mon, Wed, Fri)"
                    value={doctorData.available_days}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit">Add Doctor</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

const MyProfile = () => {
    const [doctors, setDoctors] = useState(doctorsData.doctors);
    const [showAddForm, setShowAddForm] = useState(false);

    const handleAddDoctor = (newDoctor) => {
        setDoctors([...doctors, newDoctor]);
    };

    const handleShowForm = () => {
        setShowAddForm(true);
    };

    const handleCloseForm = () => {
        setShowAddForm(false);
    };

    return (
        <>
            <div className="doctor-list">
                <h1>Doctors Profile</h1>

                {/* Add Doctor Button */}
                <button className="add-doctor-button" onClick={handleShowForm}>
                    Add Doctor
                </button>

                {/* Add Doctor Form */}
                {showAddForm && (
                    <AddDoctorForm onAddDoctor={handleAddDoctor} onClose={handleCloseForm} />
                )}

                <div className="doctor-cards">
                    {doctors.map((doctor) => (
                        <div key={doctor.id} className="doctor-card">
                            <h2>{doctor.name}</h2>
                            <p><strong>Specialization:</strong> {doctor.specialization}</p>
                            <p><strong>Experience:</strong> {doctor.experience}</p>
                            <p><strong>Email:</strong> {doctor.contact.email}</p>
                            <p><strong>Phone:</strong> {doctor.contact.phone}</p>
                            <p><strong>Location:</strong> {doctor.location}</p>
                            <p><strong>Available Days:</strong> {doctor.available_days.join(', ')}</p>

                            <div className="doctor-card-actions">
                                <button className="edit-button">Edit</button>
                                <button className="delete-button">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MyProfile;
