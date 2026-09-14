import React, { useEffect } from 'react';
import { CheckCircle2, RotateCcw, Download, AlertTriangle, ShieldCheck, Activity, Stethoscope, Info } from 'lucide-react';
import confetti from 'canvas-confetti';
import { downloadLeafReport } from '../utils/reportGenerator';

export default function ResultSection({ result, imagePreview, imageMeta, onReset }) {
  useEffect(() => {
    if (result && result.badgeColor === 'emerald') {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [result]);

  if (!result) return null;

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (result.confidence / 100) * circumference;

  const handleDownload = () => {
    downloadLeafReport(result, imagePreview, imageMeta?.name || 'leaf_scan.png');
  };

  return (
    <section className="result-section" id="results">
      <div className="container">
        <div className="result-card">
          <div className="result-header">
            <div className="result-badge-success">
              <CheckCircle2 size={22} /> Analysis Complete ✓
            </div>
            <div className="proto-label">
              Prototype AI Result • Educational Demo
            </div>
          </div>

          <div className="result-body-grid">
            <div>
              <div className="result-image-box">
                <img src={imagePreview} alt="Analyzed Leaf" />
              </div>
            </div>

            <div>
              <div className="confidence-gauge-container">
                <div className="gauge-svg-wrapper">
                  <svg width="100" height="100">
                    <circle
                      className="gauge-circle-bg"
                      cx="50"
                      cy="50"
                      r={radius}
                    />
                    <circle
                      className="gauge-circle-fill"
                      cx="50"
                      cy="50"
                      r={radius}
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      style={{
                        stroke: result.badgeColor === 'emerald' ? '#10B981' : result.badgeColor === 'amber' ? '#F59E0B' : '#EF4444'
                      }}
                    />
                  </svg>
                  <div className="gauge-center-text">
                    {result.confidence}%
                  </div>
                </div>

                <div className="gauge-info">
                  <span className={`status-tag ${result.badgeColor}`}>
                    Health Status: {result.status}
                  </span>
                  <h3 className="disease-name">{result.name}</h3>
                  <p style={{ color: '#475569', fontSize: '0.95rem', margin: 0 }}>
                    {result.explanation}
                  </p>
                </div>
              </div>

              <div className="info-cards-grid">
                <div className="info-box">
                  <h4 className="info-box-title">
                    <Activity size={18} /> Visible Symptoms
                  </h4>
                  <ul className="bullet-list">
                    {result.symptoms.map((symptom, idx) => (
                      <li key={idx}>{symptom}</li>
                    ))}
                  </ul>
                </div>

                <div className="info-box">
                  <h4 className="info-box-title">
                    <Stethoscope size={18} /> Recommended Treatment
                  </h4>
                  <ul className="bullet-list">
                    {result.treatment.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="info-box">
                  <h4 className="info-box-title">
                    <ShieldCheck size={18} /> Prevention & Management
                  </h4>
                  <ul className="bullet-list">
                    {result.prevention.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="result-actions">
                <button className="btn btn-secondary" onClick={onReset} type="button">
                  <RotateCcw size={18} /> Analyze Another Leaf
                </button>
                <button className="btn btn-primary" onClick={handleDownload} type="button">
                  <Download size={18} /> Download Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
