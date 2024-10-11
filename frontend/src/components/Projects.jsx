import React, { useEffect, useState } from 'react';
import "../CSS/Projects.css";
import Card from '../components/Card';

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/projects')
      .then(response => response.json())
      .then(data => setProjectsData(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div className='Padd' id='projects'>
      <div className='Padd'> 
        <h2 className='head_rec'>Projects</h2>
        <div className='para2'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Lorem ipsum.
        </div>
      </div>
      <div className='project'> 
        <div className='card-row'> 
          {projectsData.slice(0, 3).map(project => (
            <Card key={project.id} title={project.title} image={project.image} skill={Object.values(project.skills)} />
          ))}
        </div>
        <div className='card-row'>
          {projectsData.slice(3, 6).map(project => (
            <Card key={project.id} title={project.title} image={project.image} skill={Object.values(project.skills)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
