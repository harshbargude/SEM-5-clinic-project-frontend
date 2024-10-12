import '../pagesCss/Modal.css'; // Custom CSS for the modal
import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // If the modal is not open, return null (no modal)

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <button className="closeButton" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired, // Validates that `isOpen` is a boolean and required
    onClose: PropTypes.func.isRequired, // Validates that `onClose` is a function and required
    children: PropTypes.node.isRequired, // Validates that `children` is a React node and required
  };

export default Modal;
