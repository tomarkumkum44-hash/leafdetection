import React, { useState, useEffect } from 'react';
import { Cpu } from 'lucide-react';

const SCAN_STAGES = [
  { progress: 20, message: "Preparing image for vision model..." },
  { progress: 50, message: "Detecting leaf boundaries & contours..." },
  { progress: 75, message: "Analyzing lesion patterns & discoloration..." },
  { progress: 95, message: "Evaluating confidence score..." },
  { progress: 100, message: "Generating diagnostic health report..." }
];

export default function ScanningAnimation({ onComplete }) {
  const [currentStage, setCurrentStage] = useState(0);
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const totalDuration = 3000; // 3 seconds
    const intervalTime = totalDuration / SCAN_STAGES.length;

    const timer = setInterval(() => {
      setCurrentStage((prev) => {
        const next = prev + 1;
        if (next >= SCAN_STAGES.length) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 300);
          return SCAN_STAGES.length - 1;
        }
        setProgress(SCAN_STAGES[next].progress);
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="scanning-overlay">
      <div className="scan-laser"></div>
      <div className="scan-grid-lines"></div>

      <div className="scan-status-box">
        <div className="scan-spinner"></div>
        <div className="scan-text" style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
          <Cpu size={18} className="text-emerald-400" />
          {SCAN_STAGES[currentStage].message}
        </div>

        <div className="progress-bar-track">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
        </div>

        <div style={{ marginTop: '8px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>
          {progress}% Complete
        </div>
      </div>
    </div>
  );
}
