import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './detailPage.css'
export default function SparkDetailPage() {
  const {sparkId} = useParams();
  let url = "https://mjc1ac0uc5.execute-api.us-east-1.amazonaws.com/items/"+sparkId
  const [sparkDetail, setSparkDetail] = useState([]);

  useEffect(() => {
    const fetchSparkDetail = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setSparkDetail(data); 
        console.log(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchSparkDetail();
  }, [sparkId]);


  return (
    <div className="album-card-container">
      <div className="album-card">
        <div className="album-image-container">
          <img 
            src={sparkDetail.imageUrl} 
            alt={sparkDetail.name} 
            className="album-image"
          />
        </div>
        <div className="album-details">
          <h2>{sparkDetail.name}</h2>
          <p>{sparkDetail.desc}</p>
        </div>
      </div>
    </div>
  );
}
