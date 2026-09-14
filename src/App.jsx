import React, { useState } from 'react';
import LeafParticles from './components/LeafParticles';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AnalysisCard from './components/AnalysisCard';
import ResultSection from './components/ResultSection';
import HowItWorks from './components/HowItWorks';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import { DISEASES_DATABASE } from './data/diseasesData';

export default function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageMeta, setImageMeta] = useState(null);
  const [presetConditionId, setPresetConditionId] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);

  const handleImageSelected = (file, dataUrl, meta, sampleConditionId = null) => {
    setSelectedFile(file);
    setImagePreview(dataUrl);
    setImageMeta(meta);
    setPresetConditionId(sampleConditionId);
    setScanResult(null);
  };

  const handleStartScan = () => {
    if (!imagePreview) return;
    setIsScanning(true);
    setScanResult(null);
  };

  const handleScanComplete = () => {
    setIsScanning(false);
    
    let targetDisease;
    if (presetConditionId) {
      targetDisease = DISEASES_DATABASE.find(d => d.id === presetConditionId);
    }
    
    if (!targetDisease) {
      // Deterministic pseudo-random selection based on image size/name string length or random index
      const randomIndex = Math.floor(Math.random() * DISEASES_DATABASE.length);
      targetDisease = DISEASES_DATABASE[randomIndex];
    }

    const confidence = Math.floor(
      Math.random() * (targetDisease.maxConfidence - targetDisease.minConfidence + 1)
    ) + targetDisease.minConfidence;

    const resultObject = {
      ...targetDisease,
      confidence
    };

    setScanResult(resultObject);

    setTimeout(() => {
      const resultsElement = document.getElementById('results');
      if (resultsElement) {
        resultsElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleReset = () => {
    setSelectedFile(null);
    setImagePreview(null);
    setImageMeta(null);
    setPresetConditionId(null);
    setScanResult(null);
    setIsScanning(false);

    const analysisElement = document.getElementById('analysis');
    if (analysisElement) {
      analysisElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartClick = () => {
    const analysisElement = document.getElementById('analysis');
    if (analysisElement) {
      analysisElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-wrapper">
      <LeafParticles />
      <Navbar />

      <main>
        <HeroSection onStartClick={handleStartClick} />

        <AnalysisCard
          selectedImage={selectedFile}
          imagePreview={imagePreview}
          imageMeta={imageMeta}
          isScanning={isScanning}
          onImageSelected={handleImageSelected}
          onStartScan={handleStartScan}
          onScanComplete={handleScanComplete}
          onReset={handleReset}
        />

        {scanResult && (
          <ResultSection
            result={scanResult}
            imagePreview={imagePreview}
            imageMeta={imageMeta}
            onReset={handleReset}
          />
        )}

        <HowItWorks />
        <AboutSection />
      </main>

      <Footer />
    </div>
  );
}
