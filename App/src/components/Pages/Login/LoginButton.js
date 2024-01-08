import React, { useState } from 'react';
import './login.css'; 
import { loginUser } from '../../../BackendFunctions/Login';
import LoginFormModal from './LoginForm';
const LoginButton = ({onUserLogin}) => {
    const [showModal, setShowModal] = useState(false);
    
    return (
        <div>
             <button className="login-button" onClick={()=>setShowModal(true)}
        >
            Log In
        </button>

        <LoginFormModal 
            show={showModal} 
            onUserLogin ={onUserLogin}
            onClose={() => setShowModal(false)} 
        />
        </div>
       
        
    );
}

export default LoginButton;