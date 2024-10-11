import React from 'react';
import '../CSS/Skillcard.css';
import SkillBar from '../components/SkillBar';

const Skillcard = ({ skillSet }) => {
  return (
    <div className="skills-card">
      <div className="domain-section">
        <div className='domain'>{skillSet.domain}</div>
        {skillSet.skills.map((skill, index) => (
          <div key={index} className="Skill">
            <SkillBar skillName={skill.skill} percentage={skill.proficiency} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skillcard;
