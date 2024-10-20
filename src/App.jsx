import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Alumni from "./pages/Alumni";
import Contact from "./pages/Contact";
import Publications from "./pages/Publications";
import Investigators from "./pages/Investigators";
import "./App.css"; // Import global styles, including hamburger styles

const App = () => {
  // Function to toggle the menu
  const toggleMenu = () => {
    const menu = document.querySelector(".menu");
    const hamburger = document.querySelector(".hamburger");
    menu.classList.toggle("active");
    hamburger.classList.toggle("active");
  };

  // Function to close the menu when navigating
  const closeMenu = () => {
    const menu = document.querySelector(".menu");
    const hamburger = document.querySelector(".hamburger");
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      hamburger.classList.remove("active");
    }
  };

  return (
    <Router>
      <div className="app-container">
        {/* Wrap everything in app-container */}
        <header>
          <Link to="/" onClick={closeMenu} className="header-content">
            <img src="logo.jpg" alt="Lab Logo" className="header-logo" />
            <span className="header-text">
              Capillary Electrophoresis and Biopolymers Research Lab
            </span>
          </Link>
          <nav>
            <div className="hamburger" onClick={toggleMenu}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="menu">
              <ul>
                <li>
                  <Link to="/investigators" onClick={closeMenu}>
                    Investigators
                  </Link>
                </li>
                <li>
                  <Link to="/members" onClick={closeMenu}>
                    Members
                  </Link>
                </li>
                <li>
                  <Link to="/alumni" onClick={closeMenu}>
                    Alumni
                  </Link>
                </li>
                <li>
                  <Link to="/publications" onClick={closeMenu}>
                    Publications
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={closeMenu}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <main>
          {/* Use main tag to wrap the content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/members" element={<Members />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/investigators" element={<Investigators />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>
            <a
              href="https://github.com/erdemonal11/ce-bio-lab-website"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <svg
                height="24"
                viewBox="0 0 16 16"
                version="1.1"
                width="24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  fill="#000"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.1 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.09.16 1.9.08 2.1.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
              <span>&nbsp;Click to see GitHub repository</span>
            </a>
          </p>
          <small>Capillary Electrophoresis and Biopolymers Lab 2024</small>
        </footer>
      </div>
    </Router>
  );
};

export default App;
