import React, { useState, useEffect } from 'react';
import './page.css';
import Masonry from 'react-masonry-css';
import Spark from '../Spark';
import { loginUser } from '../../BackendFunctions/Login';

export default function SparkHomePage({setActiveNav}) {
  const [sparks, setSparks] = useState([]);
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };
  let url = "https://mjc1ac0uc5.execute-api.us-east-1.amazonaws.com/items"

  useEffect(() => {
    const fetchSparks = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setSparks(data); 
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchSparks();
  }, []);


  return (
    <div className="spark-home-page">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="spark-masonry-grid"
        columnClassName="spark-masonry-grid_column">
        {sparks.map(spark => (
          <Spark 
            setActiveNav={setActiveNav}
            sparkId={spark.id} 
            key = {spark.id}
            imageUrl={spark.imageUrl} 
            title={spark.name} 
            description={spark.desc}
          />
        ))}
      </Masonry>
    </div>
  )
}
