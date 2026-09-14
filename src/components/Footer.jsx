import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <div className="logo" style={{ fontSize: '1.75rem', marginBottom: '8px' }}>
              <span className="logo-leaf">🌿</span> LeafSense
            </div>
            <p className="footer-text">
              Intelligent Leaf Detection & Disease Analysis
            </p>
          </div>

          <div className="footer-text" style={{ textAlign: 'right' }}>
            <span style={{ display: 'block', fontWeight: 600, color: '#34D399', marginBottom: '4px' }}>
              AI/ML Project Prototype
            </span>
            <span>Empowering Smart Agriculture</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 LeafSense. Built as an AI/ML computer vision project prototype.</p>
        </div>
      </div>
    </footer>
  );
}
