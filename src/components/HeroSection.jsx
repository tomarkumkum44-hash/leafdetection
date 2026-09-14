import React from 'react';
import { Sparkles, Zap, ShieldCheck, ArrowRight } from 'lucide-react';

export default function HeroSection({ onStartClick }) {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-badges">
            <span className="feature-badge">
              <Sparkles size={14} className="text-emerald-500" /> AI Powered
            </span>
            <span className="feature-badge">
              <Zap size={14} className="text-emerald-500" /> Instant Analysis
            </span>
          </div>

          <h1 className="hero-title">
            Detect. Understand.<br />Protect.
          </h1>

          <p className="hero-subtitle">
            AI-powered leaf analysis that helps identify plant health and common leaf diseases in seconds.
          </p>

          <div style={{ display: 'flex', gap: '16px', marginBottom: '36px', flexWrap: 'wrap' }}>
            <button className="btn btn-primary btn-lg" onClick={onStartClick}>
              Try Demo Analyzer <ArrowRight size={20} />
            </button>
            <a href="#how-it-works" className="btn btn-secondary btn-lg">
              Explore Features
            </a>
          </div>

          <div className="stats-row">
            <div className="stat-item">
              <span className="stat-number">95%+</span>
              <span className="stat-label">Prototype Accuracy</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">&lt; 3 sec</span>
              <span className="stat-label">Instant Results</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Easy to Use</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-illustration-card">
            <div className="scan-beam"></div>

            <svg className="hero-leaf-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
                <linearGradient id="scanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#34D399" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#34D399" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              {/* Outer Glow Shape */}
              <path d="M100 20 C150 50 180 100 160 170 C110 170 50 150 20 100 C20 50 50 20 100 20 Z" fill="url(#leafGrad)" />
              
              {/* Leaf Vein Pattern */}
              <path d="M100 20 Q105 95 160 170" stroke="#047857" strokeWidth="3" strokeLinecap="round" />
              <path d="M102 60 Q70 75 40 85" stroke="#047857" strokeWidth="2" strokeLinecap="round" />
              <path d="M104 90 Q130 105 152 115" stroke="#047857" strokeWidth="2" strokeLinecap="round" />
              <path d="M106 120 Q75 135 50 145" stroke="#047857" strokeWidth="2" strokeLinecap="round" />

              {/* AI Scanning Nodes */}
              <circle cx="102" cy="60" r="4" fill="#34D399" />
              <circle cx="104" cy="90" r="4" fill="#34D399" />
              <circle cx="70" cy="75" r="3" fill="#6EE7B7" />
              <circle cx="130" cy="105" r="3" fill="#6EE7B7" />

              {/* Target Bounding Box Animation */}
              <rect x="25" y="30" width="145" height="130" rx="12" stroke="#34D399" strokeWidth="1.5" strokeDasharray="6 6" fill="none" opacity="0.6" />
            </svg>

            <div className="hero-visual-tag">
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={18} color="#34D399" /> AI Vision Engine Ready
              </span>
              <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>v1.0 Demo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
