import React from "react";
import "../CSS/Footer.css";
import { Link } from 'react-router-dom';
import foot from "../images/Logo.jpg";
import Photo from "../images/photo.jpg";
import Foot1 from "../images/foot1.jpg";
import Foot2 from "../images/foot2.jpg";
import Foot3 from "../images/foot3.jpg";
import Linked from "../images/LinkedIn.jpg";
import Ins from "../images/Instagram.jpg";
import Face from "../images/Facebook.jpg";
import { Link as RouterLink, useNavigate } from 'react-router-dom';


const Footer = () => {
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
    <div className="footer">
      <div className="image3">
        <img src={foot} alt="" />
      </div>
      <div>
        <div className="logo">
          <img src={Photo} alt="" />
        </div>
        <div className="outer1">
          <div >
            <div>
              <div className="img">
                <img src={Foot1} alt="" />
              </div>
              <div className="con">4.5/5 rating on Lorem</div>
            </div>
            <div>
              <div className="img">
                <img src={Foot2} alt="" />
              </div>
              <div className="con">9/10 rating on Ipsum</div>
            </div>
            <div>
              <div className="img">
                <img src={Foot3} alt="" />
              </div>
              <div className="con">4.5/5 Rating on dorel</div>
            </div>
          </div>
          <div className="dis">
            <div>
              <div className="head"><strong>Quick Links</strong></div>
              <li onClick={() => handleScroll()}>Home</li>
          <li><RouterLink to="/skills">Skills</RouterLink></li>
          <li onClick={() => handleScroll('education-section')}>Education</li>
          <li onClick={() => handleScroll('projects-section')}>Projects</li>
          <li onClick={() => handleScroll('recommendations-section')}>Recommendations</li>
          <li onClick={() => handleScroll('contact-section')}>Contacts</li>
            </div>
            <div>
            <div className="head"><strong>Portfolio</strong></div>
              <li onClick={() => handleScroll()}>Frontend Development</li>
              <li onClick={() => handleScroll()}>Backend Development</li>
              <li onClick={() => handleScroll()}>Website Design</li>
              <li onClick={() => handleScroll()}>Machine Learning</li>
              <li onClick={() => handleScroll()}>Problem Solving & DSA</li>
            </div>
            <div>
            <div className="head"><strong>Connect</strong></div>
              <li>
                <Link to='https://www.linkedin.com/'><img src={Linked} alt="LinkedIn" /></Link>
              </li>
              <br />
              <li>
                <Link to='https://www.instagram.com/'><img src={Ins} alt="Intagram" /></Link>
              </li>
              <br />
              <li>
                <Link to='https://www.facebook.com/'><img src={Face} alt="Facebook" /></Link>
              </li>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">&#169; 2024 Copyright, All Right Reserved</div>
    </div>
  );
};

export default Footer;