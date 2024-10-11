import React, { useState, useEffect } from 'react';
import '../CSS/Recommendations.css';
import RecommendationSlider from '../components/RecommendationSlider';

const Recommendations = () => {
  const [recomData, setRecomData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/recommendations')
      .then(response => response.json())
      .then(data => setRecomData(data))
      .catch(error => console.error('Error fetching recommendations:', error));
  }, []);

  return (
    <div className='Padd' id='recommendations'>
      <div className='Padd'> 
        <h2 className='head_rec'>Recommendations</h2>
        <div className='para'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit. lorem ipsum</div>
      </div>
      <div>
        <RecommendationSlider recommendations={recomData} />
      </div>
    </div>
  );
};

export default Recommendations;
