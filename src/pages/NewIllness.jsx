import  { useState } from 'react';
import '../pagesCss/NewIllness.css';  // Importing the CSS file

const NewIllness = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="container">
      <h1 className="title">New Illness Registrations</h1>
      
      {/* Action Button on Top Right */}
      <button 
        onClick={toggleForm}
        className="toggle-button"
      >
        {isFormVisible ? 'Close Form' : 'New Registration'}
      </button>

      {/* Conditional Form Rendering */}
      {isFormVisible && (
        <div className="form-container">
          <h2 className="form-title">Register New Illness</h2>
          
          <form className="form">
            <div className="form-group">
              <label className="form-label">Illness Name</label>
              <input 
                type="text" 
                className="form-input"
                placeholder="Enter illness name"
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Description</label>
              <textarea 
                className="form-textarea"
                placeholder="Enter illness description"
              />
            </div>

            <button 
              type="submit" 
              className="submit-button"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default NewIllness;
