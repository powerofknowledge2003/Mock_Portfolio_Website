import React from "react";
import "../CSS/Hero.css";
import coder from "../images/coder.jpg";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="shape1"></div>
      <div className="shape2"></div>
      <div className="shape3"></div>
      <div className="shape4"></div>
      <div className="shape5"></div>
      <div className="shape6"></div>
      <div className="shape7"></div>
      <div className="content">
        <div className="des">
          <div className="heading">
            I'm Ryan Adarlard
            <br />
            <span className="highlighting">Front End</span> Developer
          </div>
          <div className="about">
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              volutpat feugiat
              <br /> placerat lobortis. Natoque rutrum semper sed
              suspendisse nunc lectus.
            </h6>
          </div>
        </div>
        <span className="Hire-button">
          <form className="hire-b">
            <button formAction="https://github.com/" formTarget="_blank">
              {" "}
              HIRE ME <FaArrowRight />{" "}
            </button>
          </form>
        </span>
      </div>
      <div className="photo">
        <img src={coder} alt="pic" />
      </div>
    </div>
  );
};

export default Hero;
