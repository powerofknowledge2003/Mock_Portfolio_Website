import React from 'react';
import '../CSS/SkillBar.css';

const SkillBar = ({ skillName, percentage }) => {
  // Check if the skillName and percentage are valid
  if (!skillName || percentage === undefined || percentage === null) {
    return null; // Don't render anything if the data is not valid
  }

  return (
    <div className="skill-container">
      <div className='cont'>
        <span className="skill-name">{skillName}</span>
        <span className="skill-name1">{percentage}%</span>
      </div>
      <div className="skill-bar">
        <div className="Skill-bar-fill" style={{ width: `${percentage}%` }}></div>
        <span className="skill-bar-text">{percentage}%</span>
      </div>
    </div>
  );
};

export default SkillBar;
