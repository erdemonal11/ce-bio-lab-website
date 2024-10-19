import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Members from './pages/Members';
import Alumni from './pages/Alumni';
import Contact from './pages/Contact';
import Publications from './pages/Publications';
import Investigators from './pages/Investigators';
import './App.css'; // Import global styles, including hamburger styles

const App = () => {
  // Function to toggle the menu
  const toggleMenu = () => {
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger');
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
  };

  // Function to close the menu when navigating
  const closeMenu = () => {
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger');
    if (menu.classList.contains('active')) {
      menu.classList.remove('active');
      hamburger.classList.remove('active');
    }
  };

  return (
    <Router>
      <div>
        {/* Global header with hamburger menu */}
        <header>
          <h1>
            <Link to="/" onClick={closeMenu} style={{ color: 'white', textDecoration: 'none' }}>
              Lab Website
            </Link>
          </h1>
          <nav>
            <div className="hamburger" onClick={toggleMenu}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="menu">
              <ul>
                <li><Link to="/members" onClick={closeMenu}>Members</Link></li>
                <li><Link to="/alumni" onClick={closeMenu}>Alumni</Link></li>
                <li><Link to="/publications" onClick={closeMenu}>Publications</Link></li>
                <li><Link to="/investigators" onClick={closeMenu}>Investigators</Link></li>
                <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li> {/* Moved Contact to the end */}
              </ul>
            </div>
          </nav>
        </header>

        {/* Routes for each page */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/investigators" element={<Investigators />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
