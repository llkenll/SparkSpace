import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
export default function SparkDetailPage() {
  const {sparkId} = useParams();
  let url = "http://sparkspace-dev.us-west-2.elasticbeanstalk.com/sparkapi/photos/"+sparkId+'/'
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
    <div className = "detailCard">
      <div id = "visual-content-container">
      <img alt="" class="hCL kVc L4E MIw" fetchpriority="auto" loading="auto" src={sparkDetail.image}/>
      </div>
      <div id = "description-content-container">

      </div>
    </div>
    
    
  )
}
