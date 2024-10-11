import React from 'react';
import '../CSS/RecommendationCard.css';

const RecommendationCard = ({ image, review_title, name, title, review, rating }) => {
  return (
    <div className="recommendation-card">
      <div className="stars">
        {Array(rating)
          .fill()
          .map((_, index) => (
            <span key={index} className="star">★★★★★</span>
          ))}
      </div>
      <h3 className="review-title">{review_title}!</h3>
      <p className="review">{review}</p>
      <div className="profile">
        <img src={image} alt={name} className="profile-pic" />
        <div className="profile-info">
          <h4 className="name">{name}</h4>
          <p className="title">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default RecommendationCard;
