// import React, { useState } from 'react';
import '../ClinicPagesCss/Chats.css';
import {useState} from 'react';

const Chats = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [doctorResponse, setDoctorResponse] = useState('');

    // Handle sending a message as the patient
    const handleSendMessage = () => {
        if (newMessage.trim()) {
            setMessages([...messages, { text: newMessage, sender: 'patient' }]);
            setNewMessage('');
        }
    };

    // Handle sending a response as the doctor
    const handleDoctorResponse = () => {
        if (doctorResponse.trim()) {
            setMessages([...messages, { text: doctorResponse, sender: 'doctor' }]);
            setDoctorResponse('');
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-box">
                {messages.map((message, index) => (
                    <div key={index} className={`chat-message ${message.sender}`}>
                        <p>{message.text}</p>
                    </div>
                ))}
            </div>

            <div className="input-container">
                <input
                    type="text"
                    placeholder="Patient: Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>

            <div className="input-container">
                <input
                    type="text"
                    placeholder="Doctor: Type your response..."
                    value={doctorResponse}
                    onChange={(e) => setDoctorResponse(e.target.value)}
                />
                <button onClick={handleDoctorResponse}>Reply</button>
            </div>
        </div>
    );
};

export default Chats;

