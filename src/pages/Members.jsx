import React from 'react';
import './Members.css'; // Import the CSS for the Members page styling

const Members = () => {
  return (
    <div className="members-container">
      <h1>Lab Members</h1>
      <div className="members-list">
        <div className="member">
          <img src="/images/veselinaadimcilar.png" alt="Veselina Adımcılar" />
          <div className="member-info">
            <h3>Veselina Adımcılar</h3>
            <p>Veselina obtained her B.S., M.Sc., and Ph.D. degrees in the Chemistry Department from Istanbul Technical University, working on projects related to capillary electrophoresis and food packaging films.</p>
          </div>
        </div>

        <div className="member">
          <img src="/images/nilaykahya.png" alt="Nilay Kahya" />
          <div className="member-info">
            <h3>Nilay Kahya</h3>
            <p>Nilay obtained her B.S., M.Sc., and Ph.D. degrees in the Chemistry Department from Istanbul Technical University, working on projects related to biopolymer applications.</p>
          </div>
        </div>

        <div className="member">
          <img src="/images/burcuorhan.png" alt="Burcu Orhan" />
          <div className="member-info">
            <h3>Burcu Orhan</h3>
            <p>Burcu obtained her B.Sc. and M.Sc. degrees in the Chemistry Department from Istanbul Technical University, working on projects related to superabsorbent biopolymers. She joined Capillary Electrophoresis and Biopolymers Lab as a Ph.D. student in Fall 2021 and has been working on smart biopolymers and their applications.</p>
          </div>
        </div>

        <div className="member">
          <img src="/images/duygukaradeniz.png" alt="Duygu Karadeniz" />
          <div className="member-info">
            <h3>Duygu Karadeniz</h3>
            <p>Duygu received her B.S. and M.S. degrees from the Chemistry Department of Istanbul Technical University, where she worked on projects related to dye removal from wastewater. She joined the Capillary Electrophoresis and Biopolymers Lab as a Ph.D. student in Spring 2021, working on both biopolymers and water treatment.</p>
          </div>
        </div>

        <div className="member">
          <img src="/images/busraipek.png" alt="Büşra İpek" />
          <div className="member-info">
            <h3>Büşra İpek</h3>
            <p>Büşra obtained her B.S. and M.S. degrees in Chemistry Department from Istanbul Technical University, working on projects related to active food packaging materials and controlled drug release. She joined Capillary Electrophoresis and Biopolymers Lab as a Ph.D. student in Spring 2021 and has been working on both the developing food packaging materials, bioactivity, and controlled release of bioactive agents.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
