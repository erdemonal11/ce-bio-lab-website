import React from 'react';
import './Investigators.css'; // Import the CSS for Investigators page styling

const Investigators = () => {
  return (
    <div className="investigators-container">
      <h1>Investigators</h1>
      <div className="investigators-list">
        <div className="investigator">
          <img src="/images/fbediaerimberker.png" alt="Prof. Dr. F. Bedia Erim Berker" />
          <div className="investigator-info">
            <h3>Prof. Dr. F. Bedia Erim Berker</h3>
            <p>Founder and Adjoint Professor</p>
            <p>
              Prof. Dr. F. Bedia Erim Berker is the founder of Capillary Electrophoresis and Biopolymer Lab. She leads the research group specializing in capillary electrophoresis separation methods, biopolymers, and biopolymer application area. She obtained her Ph.D. degree from Istanbul Technical University. Besides ITÜ, she also worked as a research scientist at the University of Amsterdam and Massachusetts Institute of Technology. Erim Berker published 118 papers in journals including the International Journal of Biological Macromolecules, European Polymer Journal, Journal of Agricultural and Food Chemistry, Talanta, and Journal of Chromatography A. She has 3 chapters on capillary electrophoresis in international books.
            </p>
          </div>
        </div>

        <div className="investigator">
          <img src="/images/nevinoztekin.png" alt="Assoc. Prof. Dr. Nevin Öztekin" />
          <div className="investigator-info">
            <h3>Assoc. Prof. Dr. Nevin Öztekin</h3>
            <p>Investigator</p>
            <p>
              Assoc. Prof. Dr. Nevin Öztekin obtained her Ph.D. degree from Istanbul Technical University. She has been working at ITU Chemistry Department. Öztekin co-authored in 34 papers.
            </p>
          </div>
        </div>

        <div className="investigator">
          <img src="/images/zeynepkalaycioglu.png" alt="Assoc. Prof. Dr. Zeynep Kalaycıoğlu" />
          <div className="investigator-info">
            <h3>Assoc. Prof. Dr. Zeynep Kalaycıoğlu</h3>
            <p>Investigator</p>
            <p>
              Assoc. Prof. Dr. Zeynep Kalaycıoğlu obtained her Ph.D. degree from Istanbul Technical University. She has been working at ITU Chemistry Department. Kalaycıoğlu co-authored in 26 papers and 2 international book chapters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investigators;
