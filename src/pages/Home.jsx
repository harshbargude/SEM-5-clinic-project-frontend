import { useEffect, useState } from 'react';
import '../pagesCss/HomeCSS.css';
import PmI from '../Icons/UserB.svg';
import { useParams } from 'react-router-dom';
import Modal from './Modal'; // Import the Modal component

export function Home() {
  const { patientId } = useParams(); // Get patientId from the URL
  const [patient, setPatient] = useState(null); // Store patient details
  const [isModalOpen, setIsModalOpen] = useState(false); // Control modal visibility
  const [error, setError] = useState(null); // Store error message

  // State variables to manage form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [currentIllness, setCurrentIllness] = useState("");

  useEffect(() => {
    // Fetch patient details on component mount
    const fetchPatientDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/patient/1`);
        if (!response.ok) {
          throw new Error('Failed to fetch patient details');
        }
        const data = await response.json();
        setPatient(data); // Update state with patient data
      } catch (error) {
        console.error('Error fetching patient details:', error);
        // setError('Failed to load patient details. Please try again.');
      }
    };
    fetchPatientDetails();
  }, [patientId]);

  // Populate form with patient data if available
  useEffect(() => {
    if (patient) {
      setFirstName(patient.firstName || "");
      setLastName(patient.lastName || "");
      setGender(patient.gender || "");
      setdateOfBirth(patient.dateOfBirth || "");
      setCurrentIllness(patient.currentIllness || "");
    }
  }, [patient]);

  // Toggle modal visibility
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Handle form submission to update patient details
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Prepare updated patient data
    const updatedPatient = {
      firstName,
      lastName,
      gender,
      dateOfBirth,
      currentIllness,
    };

    try {
      const response = await fetch(`http://localhost:8080/patient/1`, {
        method: "PUT", // Use the PUT method to update the patient data
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPatient),
      });

      if (!response.ok) {
        throw new Error("Failed to update patient details");
      }

      const updatedPatientData = await response.json();
      setPatient(updatedPatientData); // Update the parent state with new patient details
      closeModal(); // Close the modal after updating
    } catch (error) {
      console.error("Error updating patient details:", error);
    }
  };

  // If patient data is not loaded, show loading state
  if (!patient) {
    return <div>Loading...</div>;
  }

  return (
    <div className='myClass'>
      <h1>Patient Details</h1>
      <div className='patientBox_h'>
        <div className="P_img">
          <img src={PmI} alt="Patient" />
        </div>
        <div className="P_name">
          <h3>{`${patient.firstName} ${patient.lastName}`}</h3>
          <h2 className='illnessH2'>Name</h2>
        </div>
        <div className="P_age">
          <h3>{new Date().getFullYear() - new Date(patient.dateOfBirth).getFullYear()} Years Old</h3>
          <h2 className='illnessH2'>Age</h2>
        </div>
        <div className="Gender">
          <h3>{patient.gender}</h3>
          <h2 className='illnessH2'>Gender</h2>
        </div>
        <div className="CurrentIllness">
          <h3>{patient.currentIllness}</h3>
          <h2 className='illnessH2'>Current Illness</h2>
        </div>
        <div className="EditProfile">
          <button className='EditButton' onClick={openModal}>Edit Details</button>
        </div>
        {error && <p className="error">{error}</p>} {/* Show error message */}
      </div>

      {/* Modal for editing patient details */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Edit Patient Details</h2>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>First Name:</label>
            <input 
              type="text" 
              name="firstName" 
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)} 
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input 
              type="text" 
              name="lastName" 
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)} 
            />
          </div>
          <div>
            <label>Gender:</label>
            <input 
              type="text" 
              name="gender" 
              value={gender} 
              onChange={(e) => setGender(e.target.value)} 
            />
          </div>
          <div>
            <label>Date of Birth:</label>
            <input 
              type="text" 
              name="setdateOfBirth" 
              value={dateOfBirth} 
              onChange={(e) => setdateOfBirth(e.target.value)} 
            />
          </div>
          <div>
            <label>Current Illness:</label>
            <input 
              type="text" 
              name="currentIllness" 
              value={currentIllness} 
              onChange={(e) => setCurrentIllness(e.target.value)} 
            />
          </div>
          <button type="submit" >Save Changes</button>
        </form>
      </Modal>
    </div>
  );
}
