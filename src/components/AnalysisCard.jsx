import React, { useState, useRef } from 'react';
import { Upload, Camera, Image as ImageIcon, Search, RefreshCw, Sparkles, CheckCircle2 } from 'lucide-react';
import ScanningAnimation from './ScanningAnimation';
import WebcamModal from './WebcamModal';
import { SAMPLE_LEAVES } from '../data/diseasesData';

export default function AnalysisCard({
  selectedImage,
  imagePreview,
  imageMeta,
  isScanning,
  onImageSelected,
  onStartScan,
  onScanComplete,
  onReset
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file) => {
    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file (JPG, JPEG, PNG)');
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      onImageSelected(file, reader.result, {
        name: file.name,
        size: formatBytes(file.size),
        type: file.type
      });
    };
    reader.readAsDataURL(file);
  };

  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleSampleClick = (sample) => {
    // Generate data URL from SVG
    const svgBlob = new Blob([sample.svgContent], { type: 'image/svg+xml;charset=utf-8' });
    const reader = new FileReader();
    reader.onloadend = () => {
      onImageSelected(
        null,
        reader.result,
        {
          name: `${sample.name}.svg`,
          size: '14.2 KB',
          type: 'image/svg+xml'
        },
        sample.conditionId
      );
    };
    reader.readAsDataURL(svgBlob);
  };

  const openFileBrowser = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleCameraCapture = (file, dataUrl) => {
    onImageSelected(file, dataUrl, {
      name: file.name,
      size: formatBytes(file.size),
      type: file.type
    });
  };

  return (
    <section className="analysis-section" id="analysis">
      <div className="container">
        <div className="main-analysis-card">
          <div className="section-header">
            <h2 className="section-title">Analyze Your Leaf</h2>
            <p className="section-subtitle">
              Upload or capture a clear image of a plant leaf to begin AI diagnostic analysis.
            </p>
          </div>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/jpeg, image/png, image/jpg"
            style={{ display: 'none' }}
          />

          {!imagePreview ? (
            <div>
              <div
                className={`upload-zone ${isDragging ? 'dragging' : ''}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={openFileBrowser}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && openFileBrowser()}
                aria-label="Upload leaf image zone"
              >
                <div className="upload-icon-wrapper">
                  <Upload size={32} />
                </div>
                <div className="upload-text-main">Drop your leaf image here</div>
                <div className="upload-text-sub">or click to browse from device</div>
                <div className="upload-hint">Supports JPG, JPEG or PNG • Max 10MB</div>
              </div>

              <div className="upload-actions-row">
                <button
                  className="btn btn-secondary"
                  onClick={() => setIsCameraOpen(true)}
                  type="button"
                >
                  <Camera size={18} className="text-emerald-500" /> Use Camera
                </button>
              </div>

              <div className="presets-section">
                <div className="presets-title">Or test with demo leaf samples</div>
                <div className="presets-grid">
                  {SAMPLE_LEAVES.map((sample) => (
                    <button
                      key={sample.id}
                      className="preset-chip"
                      onClick={() => handleSampleClick(sample)}
                      type="button"
                    >
                      <span>{sample.icon}</span> {sample.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="preview-container">
              <div className="preview-wrapper">
                <img src={imagePreview} alt="Leaf preview" className="preview-image" />
                {isScanning && <ScanningAnimation onComplete={onScanComplete} />}
              </div>

              <div className="preview-meta">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <ImageIcon size={20} className="text-emerald-500" />
                  <div>
                    <div className="file-name">{imageMeta?.name || 'Selected_Leaf_Image.png'}</div>
                    <div className="file-size">{imageMeta?.size || 'Image Ready'}</div>
                  </div>
                </div>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={onReset}
                  disabled={isScanning}
                  type="button"
                >
                  <RefreshCw size={14} /> Change Image
                </button>
              </div>

              <button
                className="btn btn-primary btn-lg"
                onClick={onStartScan}
                disabled={isScanning}
                style={{ marginTop: '12px', minWidth: '240px' }}
                type="button"
              >
                {isScanning ? (
                  <>Scanning Patterns...</>
                ) : (
                  <>
                    <Search size={22} /> Analyze Leaf
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      <WebcamModal
        isOpen={isCameraOpen}
        onClose={() => setIsCameraOpen(false)}
        onCapture={handleCameraCapture}
      />
    </section>
  );
}
