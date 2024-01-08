import React, { useState } from 'react';
import './login.css';
import { registerUser } from '../../../BackendFunctions/Login';
import { useNavigate } from 'react-router-dom';
const SignUpForm = ({ show, onClose, onSignUp}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const handleSignUp = async () => {
        if (!email || !password || !username) {
            setErrorMessage('Must fill out all fields');
            return;
        }

        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            setErrorMessage('Not an email address');
            return;
        }

        setErrorMessage('');

        const data = await registerUser(username,password, email);
        if (data) {
            onSignUp(data)
            // localStorage.setItem('token', data.token);
            // localStorage.setItem('username', data.user.username);
            // localStorage.setItem('email', data.user.email);
            navigate('/')
            onClose();
        } else {
            // setErrorMessage('Wrong login information');
            //already exist
        }



        console.log({ email, password, username });
        // Continue with the sign up process
    };

    const closeModal = () => {
        onClose();
    };

    if (!show) {
        return null;
    }

    return (
        <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">Sign Up</h4>
                    <button className="close-button" onClick={closeModal}>&times;</button>
                </div>

                <label>Username</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                {errorMessage && <div className="error-message">{errorMessage}</div>}

                <button onClick={handleSignUp} className="continue-button">Continue</button>
            </div>
        </div>
    );
};

export default SignUpForm;
