import React, { useState, useEffect } from 'react';
import NavButton from './NavButton'
import './nav.css';
import { useNavigate } from 'react-router-dom';
export default function NavBar({ activeNav, onNavChange }) {

  const [activeButton, setActiveButton] = useState('');
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
          <NavButton
              name = "Home"
              onClick={handleNavigation}
              isActive={activeButton === 'Home'}
          >
          </NavButton>

          <NavButton
              name = "Explore"
              onClick={handleNavigation}
              isActive={activeButton=== 'Explore'}
          >
          </NavButton>

          <NavButton
              name = "Create"
              onClick={handleNavigation}
              isActive={activeButton=== 'Create'}
          >
          </NavButton>

      </div>
      
    </div>
    
  )
}
