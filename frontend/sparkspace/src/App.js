import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/DashBoard/NavBar';
import CreatePage from './components/Pages/Create/CreatePage';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import SparkHomePage from './components/Pages/SparkHomePage';
import SparkDetailPage from './components/Pages/DetailPage/SparkDetailPage';
const App = () => {

  const [activeNav, setActiveNav] = useState('Home');

  return (
    <Router>
      <div className="app-container">
      <NavBar activeNav={activeNav} onNavChange={setActiveNav} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<SparkHomePage setActiveNav ={setActiveNav}/>} />
            <Route path="/spark-creation-tool" element={<CreatePage setActiveNav ={setActiveNav}/>} />
            <Route path="/spark/:sparkId" element={<SparkDetailPage/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

