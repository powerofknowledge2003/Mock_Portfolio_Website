import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/AddSkillModal.css';

const AddSkillModal = ({ isOpen, onClose, addSkill }) => {
  const initialSkills = [
    { skill: '', proficiency: '' },
    { skill: '', proficiency: '' },
    { skill: '', proficiency: '' },
    { skill: '', proficiency: '' },
    { skill: '', proficiency: '' },
  ];

  const [domain, setDomain] = useState('');
  const [skills, setSkills] = useState(initialSkills);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (!isOpen) {
      setDomain('');
      setSkills(initialSkills);
      setError(null);
      setResponse(null);
    }
  }, [isOpen]);

  const handleSkillChange = (index, e) => {
    const { name, value } = e.target;
    const newSkills = skills.map((skill, i) => {
      if (i !== index) return skill;
      return { ...skill, [name]: value };
    });
    setSkills(newSkills);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Validations
    if (!domain.trim()) {
      setError('Domain is required.');
      setLoading(false);
      return;
    }

    const filteredSkills = skills.filter(skill => skill.skill.trim() !== '');
    if (filteredSkills.length === 0) {
      setError('At least one skill must be associated with the domain.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/api/add-skills', {
        domain,
        skills: filteredSkills,
      });

      setResponse(response.data);
      addSkill(response.data); // Update state in Skills component
    } catch (err) {
      setError(err.message);
      console.error('Error submitting data:', err);
    } finally {
      setLoading(false);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add Skill</h2>
        <form onSubmit={handleSubmit}>
          <label>Domain</label>
          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="Front End Developer"
            className="domain-input"
          />
          <div className="skills-section">
            <div className="skills-header">
              <div>Skill</div>
              <div>Proficiency (%)</div>
            </div>
            {skills.map((skill, index) => (
              <div key={index} className="skill-inputs">
                <input
                  type="text"
                  name="skill"
                  value={skill.skill}
                  onChange={(e) => handleSkillChange(index, e)}
                  placeholder="Skill"
                />
                <input
                  type="number"
                  name="proficiency"
                  value={skill.proficiency}
                  onChange={(e) => handleSkillChange(index, e)}
                  placeholder="%"
                  min="0"
                  max="100"
                />
              </div>
            ))}
          </div>
          <div className="modal-buttons">
            <button type="submit" className="add-skill" disabled={loading}>
              {loading ? 'Submitting...' : 'Add Skill'}
            </button>
            <button type="button" className="cancel" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
        {error && <p className="error">{error}</p>}
        {response && <p className="success">Skill added successfully!</p>}
      </div>
    </div>
  );
};

export default AddSkillModal;
