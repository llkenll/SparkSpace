import React from 'react';
import './components.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
const Spark = ({sparkId, imageUrl, title, description, setActiveNav}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/spark/${sparkId}`);
    setActiveNav("spark")
  };
  return (
    <div className="spark" onClick={handleClick}>
      <div className ="sparkImageContainer">
        <img src={imageUrl} alt={title} className="spark-image" />
      </div>
      {title && <p className="spark-title">{title}</p>}
    </div>
  );
};

export default Spark;
