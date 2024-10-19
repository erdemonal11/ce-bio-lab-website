import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS for Home page styling

function Home() {
  return (
    <div>
      

      <div className="home-container">
        <div className="main-content">
          <h1>WELCOME</h1>
          <p>
            Capillary Electrophoresis and Biopolymers Lab, located at ITU Ayazağa Campus,
            has been established with the aim of exploring the state-of-the-art capillary
            electrophoresis, biopolymers, and application areas of the biopolymers.
          </p>
          <p>
            We develop analytical methods with capillary electrophoresis, conduct biopolymers in
            a number of exciting research areas, ranging from food packaging films to wound
            dressings. We synthesize metal/metal oxide nanoparticles, and investigate the
            interesting world of protein-drug interactions.
          </p>
          <p>
            We review applications from enthusiastic and talented MSc and PhD students.
            If you are looking to conduct fruitful work as part of the Capillary Electrophoresis
            and Biopolymers Lab, please contact us.
          </p>
        </div>

        <div className="sidebar">
          <h2>Latest News</h2>
          <div className="news-feed">
            <p><strong>August 2024:</strong> Ülkü Nida Çolak passed her Master’s defense! Congratulations, Ülkü Nida, and all the best for you!</p>
            <p><strong>July 2024:</strong> Our new book chapter on <Link to="/publications">sample preparation and enrichment methods</Link> in capillary electrophoresis applications has just been published!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// JavaScript function to toggle the hamburger menu
function toggleMenu() {
  const menu = document.querySelector('.menu');
  const hamburger = document.querySelector('.hamburger');
  menu.classList.toggle('active');
  hamburger.classList.toggle('active');
}

export default Home;
