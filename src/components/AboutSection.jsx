import React from 'react';

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="container about-grid">
        <div>
          <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
            Smart Agriculture Starts With Early Detection
          </h2>
          <p className="hero-subtitle" style={{ fontSize: '1.1rem', marginBottom: '24px' }}>
            LeafSense is an AI/ML project prototype designed to demonstrate how computer vision and machine learning models can assist farmers, gardeners, and agronomists in identifying plant leaf conditions early before severe crop loss occurs.
          </p>
          <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '30px' }}>
            By evaluating optical patterns on leaf blades—such as rust pustules, bacterial water-soaked streaks, and fungal spot discoloration—LeafSense demonstrates a modern, accessible approach to agricultural plant pathology.
          </p>
        </div>

        <div className="about-features">
          <div className="feature-mini-card">
            <div className="feature-mini-icon">🌱</div>
            <div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '4px', color: '#0A2F1D' }}>Plant Health Focus</h4>
              <p style={{ color: '#64748B', fontSize: '0.9rem', margin: 0 }}>
                Detect early symptoms of fungal and bacterial pathogens to safeguard yield.
              </p>
            </div>
          </div>

          <div className="feature-mini-card">
            <div className="feature-mini-icon">🤖</div>
            <div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '4px', color: '#0A2F1D' }}>AI Analysis Engine</h4>
              <p style={{ color: '#64748B', fontSize: '0.9rem', margin: 0 }}>
                Demonstrates edge pattern recognition for high confidence plant diagnostics.
              </p>
            </div>
          </div>

          <div className="feature-mini-card">
            <div className="feature-mini-icon">⚡</div>
            <div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '4px', color: '#0A2F1D' }}>Instant Insights & Treatment</h4>
              <p style={{ color: '#64748B', fontSize: '0.9rem', margin: 0 }}>
                Generates actionable treatment and prevention tips with printable PDF/HTML reports.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
