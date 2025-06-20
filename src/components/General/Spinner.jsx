// src/components/General/Spinner.jsx
import React from 'react';
import { FaSpinner } from 'react-icons/fa'; // Import a spinner icon from Font Awesome
import './Spinner.css'; // Still use CSS for styling and animation

export default function Spinner(props) {
    return (
        <div className="spinner-container">
            {/* Use the FaSpinner component */}
            <FaSpinner className="icon-spinner" />
            <p className="spinner-text">{props.text}</p>
        </div>
    );
}