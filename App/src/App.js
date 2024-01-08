import React, { useState, useEffect,useContext } from 'react';
import './App.css';
import NavBar from './components/DashBoard/NavBar';
import CreatePage from './components/Pages/Create/CreatePage';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import SparkHomePage from './components/Pages/SparkHomePage';
import SparkDetailPage from './components/Pages/DetailPage/SparkDetailPage';
import LoginPage from './components/Pages/Login/LoginPage';
import LoginDash from './components/Pages/Login/LoginDash';
import HomePage from './components/Pages/HomePage';
const App = () => {

  const [activeNav, setActiveNav] = useState('Home');

  const [userToken, setUserToken] = useState(null);

  const [userData, setUserData] = useState({
    token: '',
    username: '',
    email: ''
});

  const handleUserLogin = (userInfo) => {
    setUserToken(userInfo.token);
    setUserData({
      token: userInfo.token,
      username: userInfo.user.username,
      email: userInfo.user.email
    });
  };




  if(userData.token === ''){
    return (
      <Router>
          <div className="app-container">
          <LoginDash activeNav={activeNav} onUserLogin={handleUserLogin} onNavChange={setActiveNav}></LoginDash>
            <div className="main-content">
              <Routes>
                {/* <Route path="/" element={<SparkHomePage setActiveNav ={setActiveNav}/>} /> */}
                <Route path="/" element={<HomePage setActiveNav ={setActiveNav} data={userData}/>} />
                <Route path="/home" element={<SparkHomePage setActiveNav ={setActiveNav}/>} />
                <Route path="/spark-creation-tool" element={<CreatePage setActiveNav ={setActiveNav}/>} />
                <Route path="/spark/:sparkId" element={<SparkDetailPage/>} />
              </Routes>
            </div>
          </div>
        </Router>
      
    );
  }

  return (
    <Router>
      <div className="app-container">
      <NavBar activeNav={activeNav} onNavChange={setActiveNav} />
        <div className="main-content">
          <Routes>
            {/* <Route path="/" element={<SparkHomePage setActiveNav ={setActiveNav}/>} /> */}
            {/* <Route path="/" element={<LoginPage/>} /> */}
            <Route path="/" element={<HomePage setActiveNav ={setActiveNav} data={userData}/>} />
            <Route path="/home" element={<SparkHomePage setActiveNav ={setActiveNav}/>} />
            <Route path="/spark-creation-tool" element={<CreatePage setActiveNav ={setActiveNav}/>} />
            <Route path="/spark/:sparkId" element={<SparkDetailPage/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

