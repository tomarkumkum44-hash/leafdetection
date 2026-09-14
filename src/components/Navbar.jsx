import React from 'react';

export default function Navbar() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="logo">
          <span className="logo-leaf">🌿</span> LeafSense
        </a>

        <ul className="nav-links">
          <li>
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#analysis" onClick={(e) => scrollToSection(e, 'analysis')} className="nav-link">
              Analyze
            </a>
          </li>
          <li>
            <a href="#how-it-works" onClick={(e) => scrollToSection(e, 'how-it-works')} className="nav-link">
              How It Works
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="nav-link">
              About
            </a>
          </li>
        </ul>

        <div className="status-badge">
          <span className="status-pulse"></span>
          AI Ready
        </div>
      </div>
    </nav>
  );
}
