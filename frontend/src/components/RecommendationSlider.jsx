import React from 'react';
import Slider from 'react-slick';
import RecommendationCard from './RecommendationCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../CSS/RecommendationSlider.css';

const RecommendationSlider = ({ recommendations }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '10px', 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="recommendation-slider">
      <Slider {...settings}>
        {recommendations.map((rec, index) => (
          <RecommendationCard
            key={index}
            image={rec.image}
            review_title={rec.review_title}
            name={rec.name}
            title={rec.title}
            review={rec.review}
            rating={rec.rating} // Assuming rating is part of the data
          />
        ))}
      </Slider>
    </div>
  );
};

export default RecommendationSlider;
