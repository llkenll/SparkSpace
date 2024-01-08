import React from 'react';
import './login.css'; // Make sure to import the CSS file

const SignUpButton = ({onClick}) => {
    return (
        <button className="sign-up-button" onClick={onClick}>
            Sign Up
        </button>
    );
}

export default SignUpButton;
