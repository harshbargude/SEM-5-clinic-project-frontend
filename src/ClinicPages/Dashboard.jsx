import '../ClinicPagesCss/ClinicDetails.css'; // Import the CSS file for styling
// import '../ /ClinicDetails.css'; // Import the CSS file for styling

const Dashboard = () => {
    const clinicInfo = {
        name: "Wellness Clinic",
        address: "123 Health St, Springfield, USA",
        phone: "+1-555-678-9012",
        email: "contact@wellnessclinic.com",
        hours: "Mon-Fri: 9 AM - 5 PM"
    };

    const doctors = [
        {
            id: 1,
            name: "Dr. Sarah Johnson",
            specialization: "Cardiologist",
            experience: "12 years"
        },
        {
            id: 2,
            name: "Dr. Michael Lee",
            specialization: "Dermatologist",
            experience: "8 years"
        },
        {
            id: 3,
            name: "Dr. Priya Patel",
            specialization: "Pediatrician",
            experience: "10 years"
        }
    ];

    return (
        <div className="clinic-details-container">
            <div className="dashhead_h">
            {/* <h2>Dashboard</h2> */}
            </div>

            <div className="clinic-info">
                <h2>{clinicInfo.name}</h2>
                <p><strong>Address:</strong> {clinicInfo.address}</p>
                <p><strong>Phone:</strong> {clinicInfo.phone}</p>
                <p><strong>Email:</strong> {clinicInfo.email}</p>
                <p><strong>Hours:</strong> {clinicInfo.hours}</p>
            </div>
            <div className="doctors-list">
                <h2>Doctors at {clinicInfo.name}</h2>
                <ul>
                    {doctors.map(doctor => (
                        <li key={doctor.id} className="doctor-card">
                            <h3>{doctor.name}</h3>
                            <p><strong>Specialization:</strong> {doctor.specialization}</p>
                            <p><strong>Experience:</strong> {doctor.experience}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Dashboard;
