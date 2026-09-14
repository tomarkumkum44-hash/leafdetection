import React from 'react';
import { UploadCloud, Cpu, FileCheck } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Upload or Capture',
      icon: <UploadCloud size={28} className="text-emerald-500" />,
      desc: 'Upload a clear photograph or use your camera device to snap a leaf image.'
    },
    {
      num: '02',
      title: 'AI Pattern Analysis',
      icon: <Cpu size={28} className="text-emerald-500" />,
      desc: 'Our prototype vision model scans for chlorosis, necrosis, lesions, and fungal powder patterns.'
    },
    {
      num: '03',
      title: 'Instant Actionable Insights',
      icon: <FileCheck size={28} className="text-emerald-500" />,
      desc: 'Receive disease identification, confidence ratings, organic treatments, and prevention guidelines.'
    }
  ];

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Three simple steps to assess foliage health and protect your crops.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <div className="step-card" key={step.num}>
              <div className="step-number">{step.num}</div>
              <div style={{ marginBottom: '16px' }}>{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
