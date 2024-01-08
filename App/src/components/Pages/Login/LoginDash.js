import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginButton from './LoginButton';
import SignUpButton from './SignUp';
import SignUpModal from './SignUpForm';
export default function LoginDash({onUserLogin, activeNav, onNavChange }) {

  const [activeButton, setActiveButton] = useState('');

  const [isSignUpModalVisible, setIsSignUpModalVisible] = useState(false);

  const toggleSignUpModal = () => {
    setIsSignUpModalVisible(!isSignUpModalVisible);
  };
  const navigate = useNavigate();
  const handleNavigation = (name) => {
    setActiveButton(name);
    onNavChange(name);
    if(name === "Create"){
      navigate('/spark-creation-tool');
    }
    if(name === "Home"){
      navigate('/')
    }

  };

  useEffect(() => {
    setActiveButton(activeNav);
  }, [activeNav]);

  return (
    <div class = "navBar">
        <div class = "navBarButtonContainer">
         <LoginButton onUserLogin = {onUserLogin}></LoginButton>
         <SignUpButton onClick={toggleSignUpModal}></SignUpButton>
         {isSignUpModalVisible && 
                <SignUpModal 
                    show={isSignUpModalVisible} 
                    onClose={() => setIsSignUpModalVisible(false)} 
                />
            }
      </div>
      
    </div>
    
  )
}
