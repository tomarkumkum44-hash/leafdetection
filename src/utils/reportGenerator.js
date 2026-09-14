export function downloadLeafReport(result, imageDataUrl, fileName = 'leaf-image.png') {
  const dateStr = new Date().toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'short'
  });

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>LeafSense AI Diagnostic Report - ${result.name}</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #1F2937;
      background-color: #F8FAFC;
      margin: 0;
      padding: 40px 20px;
    }
    .report-container {
      max-width: 800px;
      margin: 0 auto;
      background: #FFFFFF;
      border-radius: 16px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.08);
      border: 1px solid #E2E8F0;
      overflow: hidden;
    }
    .header {
      background: linear-gradient(135deg, #0A2F1D 0%, #10B981 100%);
      color: white;
      padding: 30px 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo {
      font-size: 28px;
      font-weight: 800;
      letter-spacing: -0.5px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .subtitle {
      font-size: 13px;
      opacity: 0.85;
      margin-top: 4px;
    }
    .badge {
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(8px);
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .body {
      padding: 40px;
    }
    .meta-bar {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #E2E8F0;
      padding-bottom: 20px;
      margin-bottom: 30px;
      font-size: 14px;
      color: #64748B;
    }
    .grid {
      display: grid;
      grid-template-columns: 240px 1fr;
      gap: 30px;
      margin-bottom: 30px;
    }
    .image-preview {
      width: 100%;
      height: 240px;
      border-radius: 12px;
      object-fit: cover;
      border: 2px solid #E2E8F0;
    }
    .summary-card {
      background: #F4F9F5;
      border: 1px solid #D1FAE5;
      border-radius: 12px;
      padding: 24px;
    }
    .disease-title {
      font-size: 24px;
      font-weight: 700;
      color: #0A2F1D;
      margin: 0 0 10px 0;
    }
    .stat-row {
      display: flex;
      gap: 20px;
      margin: 15px 0;
    }
    .stat-box {
      background: white;
      padding: 10px 16px;
      border-radius: 8px;
      border: 1px solid #E2E8F0;
    }
    .stat-label {
      font-size: 11px;
      text-transform: uppercase;
      color: #64748B;
      font-weight: 600;
    }
    .stat-value {
      font-size: 18px;
      font-weight: 800;
      color: #10B981;
    }
    .section-heading {
      font-size: 16px;
      font-weight: 700;
      color: #0A2F1D;
      margin-top: 30px;
      margin-bottom: 12px;
      border-left: 4px solid #10B981;
      padding-left: 10px;
    }
    ul {
      margin: 0;
      padding-left: 20px;
    }
    li {
      margin-bottom: 8px;
      color: #334155;
      line-height: 1.5;
    }
    .disclaimer {
      margin-top: 40px;
      padding: 16px;
      background: #FFFBEB;
      border: 1px solid #FDE68A;
      border-radius: 8px;
      font-size: 12px;
      color: #92400E;
    }
    .footer {
      text-align: center;
      padding: 20px;
      background: #F8FAFC;
      border-top: 1px solid #E2E8F0;
      font-size: 13px;
      color: #94A3B8;
    }
    @media print {
      body { background: white; padding: 0; }
      .report-container { box-shadow: none; border: none; }
    }
  </style>
</head>
<body>
  <div class="report-container">
    <div class="header">
      <div>
        <div class="logo">🌿 LeafSense</div>
        <div class="subtitle">Intelligent Leaf Detection & Disease Analysis Report</div>
      </div>
      <div class="badge">Prototype AI Output</div>
    </div>
    
    <div class="body">
      <div class="meta-bar">
        <div><strong>Date Generated:</strong> ${dateStr}</div>
        <div><strong>Source File:</strong> ${fileName}</div>
      </div>

      <div class="grid">
        <img src="${imageDataUrl}" alt="Analyzed Leaf" class="image-preview" />
        <div class="summary-card">
          <div class="disease-title">${result.name}</div>
          <div class="stat-row">
            <div class="stat-box">
              <div class="stat-label">Health Status</div>
              <div class="stat-value" style="color: ${result.badgeColor === 'emerald' ? '#10B981' : result.badgeColor === 'amber' ? '#D97706' : '#DC2626'}">${result.status}</div>
            </div>
            <div class="stat-box">
              <div class="stat-label">AI Confidence</div>
              <div class="stat-value">${result.confidence}%</div>
            </div>
          </div>
          <p style="margin: 0; color: #475569; font-size: 14px; line-height: 1.5;">${result.explanation}</p>
        </div>
      </div>

      <div class="section-heading">Visible Symptoms Detected</div>
      <ul>
        ${result.symptoms.map(s => `<li>${s}</li>`).join('')}
      </ul>

      <div class="section-heading">Recommended Immediate Treatment</div>
      <ul>
        ${result.treatment.map(t => `<li>${t}</li>`).join('')}
      </ul>

      <div class="section-heading">Long-term Prevention Strategy</div>
      <ul>
        ${result.prevention.map(p => `<li>${p}</li>`).join('')}
      </ul>

      <div class="disclaimer">
        <strong>⚠️ Prototype AI Disclaimer:</strong> This diagnostic report was generated by the LeafSense demonstration prototype. It is intended for educational and computer vision presentation purposes and does not constitute a certified agricultural diagnostic certificate.
      </div>
    </div>

    <div class="footer">
      LeafSense AI/ML Project Prototype • Empowering Smart Agriculture • © 2026 LeafSense
    </div>
  </div>
</body>
</html>`;

  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `LeafSense_Report_${result.id}_${Date.now()}.html`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
