import { useState } from 'react';
import "../ClinicPagesCss/thirdoption.css";
import "../ClinicPagesCss/Myclinic.css";

const AddClinicForm = ({ onAddClinic, onClose }) => {
    const [clinicData, setClinicData] = useState({
        name: '',
        address: '',
        phone: '',
        email: '',
        opening_hours: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setClinicData({
            ...clinicData,
            [name]: value
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onAddClinic(clinicData); // Pass clinic data to parent component
        onClose(); // Close the form after submitting
    };

    return (
        <div className="add-clinic-form">
            <h2>Add New Clinic</h2>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Clinic Name"
                    value={clinicData.name}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={clinicData.address}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={clinicData.phone}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={clinicData.email}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="opening_hours"
                    placeholder="Opening Hours"
                    value={clinicData.opening_hours}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit">Add Clinic</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

const MyClinic = () => {
    const [clinic, setClinic] = useState(null); // State to store clinic data
    const [showAddForm, setShowAddForm] = useState(false);

    const handleAddClinic = (newClinic) => {
        setClinic(newClinic); // Store clinic data after submission
    };

    const handleShowForm = () => {
        setShowAddForm(true); // Show form when button is clicked
    };

    const handleCloseForm = () => {
        setShowAddForm(false); // Hide form after submission or cancellation
    };

    return (
        <>
            <div className="clinic-section">
                {/* Add Clinic Button */}
                {!clinic && (
                    <button className="add-clinic-button" onClick={handleShowForm}>
                        Add Clinic
                    </button>
                )}

                {/* Add Clinic Form */}
                {showAddForm && (
                    <AddClinicForm onAddClinic={handleAddClinic} onClose={handleCloseForm} />
                )}

                {/* Show Clinic Details if clinic is added */}
                {clinic && (
                    <div className="clinic-details">
                        <h2>Clinic Details</h2>
                        <p><strong>Name:</strong> {clinic.name}</p>
                        <p><strong>Address:</strong> {clinic.address}</p>
                        <p><strong>Phone:</strong> {clinic.phone}</p>
                        <p><strong>Email:</strong> {clinic.email}</p>
                        <p><strong>Opening Hours:</strong> {clinic.opening_hours}</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default MyClinic;
