import React from "react";
import "../CSS/Card.css";

const Card = ({ title, image, skill }) => {
  return (
    <div className="Card">
      <div className="image1">
        <img src={`../images/${image}`} alt={title} />
      </div>
      <div className="content1">
        <div className="title">{title}</div>
        <p className="desc">
          Lorem ipsum, dolor sit amet consectetur adipisipiente repudiandae
          dolorem, corporis exercitationem apeleniti, molestiae?
        </p>
        <div className="skills">
          {skill &&
            skill.map((skillItem, index) => (
              <div key={index} className="skill">
                {skillItem}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
