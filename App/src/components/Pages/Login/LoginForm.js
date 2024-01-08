import React, { useState } from 'react';
import './login.css'; 
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../../BackendFunctions/Login';
const LoginForm = ({ show, onClose, onUserLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    if (!show) {
        return null;
    }

    const handleLogin = async () => {
        setIsLoggingIn(true);
        const data = await loginUser(email,password);
        if (data) {
            onClose();
            onUserLogin(data)
            localStorage.setItem('token', data.token);
            localStorage.setItem('username', data.user.username);
            localStorage.setItem('email', data.user.email);
            navigate('/')
        } else {
            setErrorMessage('Wrong login information');
        }
    
        setIsLoggingIn(false);

        
    };

    const closeModal = ()=>{
        setErrorMessage(null);
        onClose();
    }

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">Log In</h4>
                    <button className="close-button" onClick={closeModal}>&times;</button>
                </div>
                <div className="modal-body">
                    <label>Email</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Password</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errorMessage&& <div  className="error-message">{errorMessage}</div>}
                </div>
                <div className="modal-footer">
                    <button onClick={handleLogin} className="login-button" disabled={isLoggingIn}>{isLoggingIn ? 'Logging In...' : 'Login'}</button>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
