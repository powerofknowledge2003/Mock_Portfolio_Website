import React, { useState } from 'react';
import axios from 'axios';
import "../CSS/ContactForm.css"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? '' : 'Name is required.';
    tempErrors.email = formData.email ? '' : 'Email is required.';
    if (formData.email) {
      tempErrors.email = formData.email.match(/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/) ? '' : 'Email is not valid.';
    }
    tempErrors.subject = formData.subject ? '' : 'Subject is required.';
    tempErrors.message = formData.message ? '' : 'Message is required.';
    setErrors(tempErrors);
    return Object.keys(tempErrors).every(x => tempErrors[x] === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      axios.post('http://localhost:3000/messages', formData)
        .then(response => {
          console.log(response.data);
          setIsSubmitted(true);
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        })
        .catch(error => {
          console.error('There was an error submitting the form!', error);
        });
    }
  };

  return (
    <div className="contact-form">
      {isSubmitted && <p>Thank you! Your message has been sent.</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Your Full Name (Required)</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label>Your Email (Required)</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && <span className="error">{errors.subject}</span>}
        </div>
        <div className="form-group">
          <label>Your Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        <button type="submit">SEND MESSAGE</button>
      </form>
    </div>
  );
};

export default ContactForm;
