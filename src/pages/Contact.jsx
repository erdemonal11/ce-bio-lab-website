import React from 'react';
import './Contact.css'; // Import the CSS for Contact page styling

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-details">
        <div className="contact-person">
          <h2>Nevin Öztekin</h2>
          <p><strong>Associate Professor</strong></p>
          <p>Department of Chemistry</p>
          <p>Istanbul Technical University</p>
          <p>Email: <a href="mailto:noztekin@itu.edu.tr">noztekin@itu.edu.tr</a></p>
        </div>
        <div className="contact-person">
          <h2>Zeynep Kalaycıoğlu</h2>
          <p><strong>Associate Professor</strong></p>
          <p>Department of Chemistry</p>
          <p>Istanbul Technical University</p>
          <p>Email: <a href="mailto:kalayciogluz@itu.edu.tr">kalayciogluz@itu.edu.tr</a></p>
        </div>
      </div>

      {/* Embedded Google Map */}
      <div className="map-section">
        <h3>Our Location</h3>
        <iframe
          title="Google Maps"
          src="https://maps.google.com/maps?q=ITU%20Ayaza%C4%9Fa%20Campus&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
