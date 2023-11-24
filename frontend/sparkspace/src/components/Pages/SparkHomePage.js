import React, { useState, useEffect } from 'react';
import './page.css';
import Masonry from 'react-masonry-css';
import Spark from '../Spark';


export default function SparkHomePage() {
  const [sparks, setSparks] = useState([]);
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };
  let url = "http://sparkspace-dev.us-west-2.elasticbeanstalk.com/sparkapi/photos/"

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
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="spark-masonry-grid"
      columnClassName="spark-masonry-grid_column">
      {sparks.map(spark => (
        <Spark 
          key={spark.id} 
          imageUrl={spark.image} 
          title={spark.photoTitle} 
          description={spark.photoDescription}
        />
      ))}
    </Masonry>
  )
}
