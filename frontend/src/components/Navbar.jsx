import React from 'react';
import '../CSS/Navbar.css';
import Photo from '../images/photo.jpg';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleScroll = (sectionId) => {
    // Navigate to the home page first
    navigate('/');

    // Use a timeout to ensure the page is loaded before scrolling
    setTimeout(() => {
      if (sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Scroll to the top of the page if no sectionId is provided
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 300); // Adjust this delay if necessary
  };

  return (
    <nav> 
      <div className='image'> 
        <img src={Photo} alt="" width='100px' />
      </div> 
      <div className='nav'>
        <div className='lis'>
          <div onClick={() => handleScroll()}>Home</div>
          <div><RouterLink to="/skills">Skills</RouterLink></div>
          <div onClick={() => handleScroll('education-section')}>Education</div>
          <div onClick={() => handleScroll('projects-section')}>Projects</div>
          <div onClick={() => handleScroll('recommendations-section')}>Recommendations</div>
          <div onClick={() => handleScroll('contact-section')}>Contacts</div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
