import React, { useState, useEffect } from 'react';
import "../CSS/Skills.css";
import Skillcard from '../components/Skillcard';
import AddSkillModal from '../components/AddSkillModal';

const Skills = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [skills, setSkills] = useState([]);

  const fetchSkills = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/get-skills');
      const data = await response.json();
      setSkills(data);
    } catch (error) {
      console.error('Error fetching skills:', error);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addSkillToState = (newSkill) => {
    setSkills((prevSkills) => [...prevSkills, newSkill]);
  };

  return (
    <div>
      <div className='pad' id='projects'>
        <div className='pad'>
          <h2 className='head_rec'>Skills & Languages</h2>
          <div className='para2'>
            Amet minim mollit non deserunt ullamco est sit aliqua 
            dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
          </div>
        </div>
        <div className='Project'>
          <div className='card-row'>
            {skills.map((skillSet, index) => (
              <Skillcard key={index} skillSet={skillSet} />
            ))}
          </div>
        </div>
        <div className="hire-button">
          <button onClick={openModal} className="add-button">Add Skill</button>
          <AddSkillModal isOpen={isModalOpen} onClose={closeModal} addSkill={addSkillToState} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
