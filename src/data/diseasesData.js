export const DISEASES_DATABASE = [
  {
    id: "healthy",
    name: "Healthy Plant Leaf",
    status: "Healthy",
    severity: "low",
    badgeColor: "emerald",
    minConfidence: 92,
    maxConfidence: 99,
    explanation: "No significant visual symptoms of fungal, bacterial, or pest damage detected. The chlorophyll distribution and leaf margin integrity appear normal.",
    symptoms: [
      "Vibrant green pigmentation evenly distributed",
      "Clean leaf margins without lesion or curling",
      "Stomata and vein structure intact",
      "Free of powdery deposits, rust spots, or water-soaked lesions"
    ],
    treatment: [
      "Maintain existing hydration and sunlight schedule",
      "Apply balanced organic N-P-K fertilizer as needed",
      "Routine monitoring to preserve plant vigor"
    ],
    prevention: [
      "Ensure proper soil drainage and aeration",
      "Avoid direct water contact on foliage during evening hours",
      "Sanitize garden tools regularly to prevent cross-contamination"
    ]
  },
  {
    id: "leaf_spot",
    name: "Leaf Spot Disease (Cercospora / Septoria)",
    status: "Needs Attention",
    severity: "medium",
    badgeColor: "amber",
    minConfidence: 88,
    maxConfidence: 96,
    explanation: "Characterized by discrete necrotic spots with dark brown halos across the leaf lamina, often caused by fungal pathogens under humid conditions.",
    symptoms: [
      "Small circular or irregular dark brown to black spots",
      "Yellow halo surrounding active necrotic lesions",
      "Premature leaf yellowing around cluster spots",
      "Target-like concentric ring patterns in severe cases"
    ],
    treatment: [
      "Prune and safely dispose of infected foliage immediately",
      "Apply copper-based or sulfur-based organic fungicide every 7-10 days",
      "Avoid overhead sprinkler irrigation; water directly at root level"
    ],
    prevention: [
      "Increase plant spacing to maximize airflow and canopy drying",
      "Apply neem oil as a preventive bio-fungicide during wet seasons",
      "Rotate crops and clear fallen leaf debris from soil surface"
    ]
  },
  {
    id: "powdery_mildew",
    name: "Powdery Mildew (Erysiphales)",
    status: "Needs Attention",
    severity: "medium",
    badgeColor: "amber",
    minConfidence: 87,
    maxConfidence: 95,
    explanation: "A common fungal infection presenting as white, flour-like powder patches on leaf surfaces, impeding photosynthesis and stunting foliage growth.",
    symptoms: [
      "Dusty white or grayish flour-like coating on upper leaf surface",
      "Curling or distorted leaf margins",
      "Chlorosis (yellowing) beneath dense fungal patches",
      "Stunted young shoots and brittle leaves"
    ],
    treatment: [
      "Spray affected leaves with potassium bicarbonate or dilute milk solution (1:9 ratio)",
      "Apply systemic bio-fungicide containing Bacillus subtilis",
      "Gently remove heavily crusted leaves to reduce spore count"
    ],
    prevention: [
      "Place plant in full morning sunlight to discourage spore germination",
      "Maintain adequate spacing between foliage density",
      "Avoid high-nitrogen fertilizers which induce overly dense tender growth"
    ]
  },
  {
    id: "rust_disease",
    name: "Puccinia Rust Disease",
    status: "Action Required",
    severity: "high",
    badgeColor: "rose",
    minConfidence: 89,
    maxConfidence: 97,
    explanation: "Fungal pathogen producing bright orange, rust-colored pustules on the underside of leaves. High humidity accelerates spore dispersal.",
    symptoms: [
      "Bright orange, reddish-brown, or yellow raised pustules on leaf underside",
      "Yellow specks appearing on the upper leaf surface opposite pustules",
      "Dry, brittle leaf texture leading to early defoliation",
      "Weakened plant stems and reduced crop yields"
    ],
    treatment: [
      "Remove and incinerate/isolate infected foliage (do not compost)",
      "Treat remaining foliage with targeted liquid copper or bio-sulfur spray",
      "Isolate affected plant from neighboring vegetation"
    ],
    prevention: [
      "Plant rust-resistant cultivars whenever available",
      "Keep foliage dry and water only at early dawn",
      "Apply protective neem oil spray bi-weekly during high humidity periods"
    ]
  },
  {
    id: "bacterial_blight",
    name: "Bacterial Leaf Blight (Xanthomonas)",
    status: "Action Required",
    severity: "high",
    badgeColor: "rose",
    minConfidence: 86,
    maxConfidence: 94,
    explanation: "Severe bacterial disease causing water-soaked angular lesions that rapidly turn yellow, brown, and necrotic along leaf margins and veins.",
    symptoms: [
      "Translucent water-soaked streaks or spots along leaf veins",
      "Yellowing rapidly spreading from leaf margins inward",
      "Milky bacterial exudate droplets visible on lesions in morning dew",
      "Browning, wilting, and complete leaf collapse"
    ],
    treatment: [
      "Promptly prune infected plant parts 2-3 inches below affected zones",
      "Apply copper hydroxide bactericide following agricultural guidance",
      "Sterilize pruning shears between every single cut with 70% isopropyl alcohol"
    ],
    prevention: [
      "Use certified disease-free seeds and seedlings",
      "Avoid working in or harvesting gardens when foliage is wet",
      "Implement drip line irrigation and soil mulching to stop splash-back"
    ]
  }
];

export const SAMPLE_LEAVES = [
  {
    id: "sample-healthy",
    name: "Healthy Rose Leaf",
    conditionId: "healthy",
    previewBg: "linear-gradient(135deg, #10B981, #059669)",
    icon: "🌱",
    svgContent: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50,10 C75,25 90,50 80,85 C55,85 25,75 10,50 C10,25 25,10 50,10 Z" fill="#10B981"/>
      <path d="M50,10 Q52,47 80,85 M50,30 Q35,40 20,45 M50,45 Q65,52 75,55 M50,60 Q38,68 28,72" stroke="#047857" stroke-width="2" fill="none"/>
    </svg>`
  },
  {
    id: "sample-spot",
    name: "Tomato Leaf Spot",
    conditionId: "leaf_spot",
    previewBg: "linear-gradient(135deg, #F59E0B, #D97706)",
    icon: "🍂",
    svgContent: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50,10 C75,25 90,50 80,85 C55,85 25,75 10,50 C10,25 25,10 50,10 Z" fill="#65A30D"/>
      <path d="M50,10 Q52,47 80,85 M50,30 Q35,40 20,45 M50,45 Q65,52 75,55" stroke="#3F6212" stroke-width="2" fill="none"/>
      <circle cx="35" cy="35" r="6" fill="#78350F" stroke="#FDE047" stroke-width="1.5"/>
      <circle cx="60" cy="45" r="5" fill="#78350F" stroke="#FDE047" stroke-width="1.5"/>
      <circle cx="45" cy="65" r="7" fill="#78350F" stroke="#FDE047" stroke-width="1.5"/>
      <circle cx="68" cy="68" r="4" fill="#78350F" stroke="#FDE047" stroke-width="1"/>
    </svg>`
  },
  {
    id: "sample-rust",
    name: "Apple Rust Leaf",
    conditionId: "rust_disease",
    previewBg: "linear-gradient(135deg, #EF4444, #B91C1C)",
    icon: "🍁",
    svgContent: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50,10 C75,25 90,50 80,85 C55,85 25,75 10,50 C10,25 25,10 50,10 Z" fill="#84CC16"/>
      <path d="M50,10 Q52,47 80,85" stroke="#4D7C0F" stroke-width="2" fill="none"/>
      <circle cx="40" cy="30" r="5" fill="#EA580C"/>
      <circle cx="55" cy="38" r="7" fill="#C2410C"/>
      <circle cx="30" cy="52" r="6" fill="#EA580C"/>
      <circle cx="62" cy="60" r="8" fill="#9A3412"/>
      <circle cx="45" cy="72" r="5" fill="#C2410C"/>
    </svg>`
  }
];
