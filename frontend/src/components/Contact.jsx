import React from "react";
import "../CSS/Contact.css";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";
import ContactForm from '../components/ContactForm';


const Contact = () => {
  return (
    <div className="outer" id="contact">
      <div>
        <h2 className=".h2">Leave ME Your Info</h2>
        <div className="form">
          <ContactForm />{" "}
        </div>
      </div> 
      <div>
        <h2 className=".h2">Contact Information</h2>
        <div className="box">
          <div className="symbols">
            <span className="highlight">
              <FaMapMarkedAlt />{" "}
            </span>
          </div>

          <div className="inner">
            <div>
              <h4 className=".h4">Country:</h4>
              <h4 className=".h4">City:</h4>
              <h4 className=".h4">Street:</h4>
            </div>
            <div>
              <p className=".p">Bangladesh</p>
              <p className=".p">Dhaka</p>
              <p className=".p">35 vhatara, Badda</p>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="symbols">
            <span className="highlight">
              <FaEnvelope />{" "}
            </span>
          </div>

          <div className="inner">
            <div>
              <h4 className=".h4">Email:</h4>
              <h4 className=".h4">Skype:</h4>
              <h4 className=".h4">Telegram:</h4>
            </div>
            <div>
              <p className=".p">youremail@gmail.com</p>
              <p className=".p">@yourusername</p>
              <p className=".p">@yourusername</p>
            </div>
          </div>
        </div>
        <div className="box3">
          <div className="symbols">
            <span className="highlight">
              <FaMobile />{" "}
            </span>
          </div>

          <div className="inner">
            <div>
              <h4 className=".h4">Support Services:</h4>
              <h4 className=".h4">Office:</h4>
              <h4 className=".h4">Personal:</h4>
            </div>
            <div>
              <p className=".p">15369</p>
              <p className=".p">+58 (021)356 587 235</p>
              <p className=".p">+58 (021)356 587 235</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
