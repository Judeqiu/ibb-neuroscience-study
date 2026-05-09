#!/usr/bin/env python3
"""Generate a clean SVG concept map for neuroscience."""

svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <style>
      .box { rx: 8; ry: 8; stroke-width: 2; }
      .text { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; font-size: 13px; font-weight: 600; text-anchor: middle; dominant-baseline: middle; }
      .small { font-size: 11px; font-weight: 500; }
      .arrow { stroke: #64748b; stroke-width: 2; fill: none; marker-end: url(#arrowhead); }
      .darrow { stroke: #94a3b8; stroke-width: 1.5; fill: none; stroke-dasharray: 4,3; }
    </style>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#64748b" />
    </marker>
  </defs>
  
  <!-- Background -->
  <rect width="1200" height="800" fill="#f8fafc" rx="12"/>
  
  <!-- Title -->
  <text x="600" y="30" class="text" font-size="18" font-weight="700" fill="#1e293b">Neuroscience Concept Map</text>
  <text x="600" y="52" class="text small" fill="#64748b">From Histology → Anatomy → Function → Clinical Correlation</text>
  
  <!-- Level 1: Development -->
  <rect x="480" y="70" width="240" height="36" class="box" fill="#dbeafe" stroke="#2563eb"/>
  <text x="600" y="88" class="text" fill="#1e40af">Neural Plate → Neural Tube → Neural Crest</text>
  
  <!-- Arrows down -->
  <line x1="540" y1="106" x2="300" y2="150" class="arrow"/>
  <line x1="660" y1="106" x2="900" y2="150" class="arrow"/>
  
  <!-- Level 2: CNS vs PNS -->
  <rect x="180" y="150" width="240" height="36" class="box" fill="#dcfce7" stroke="#16a34a"/>
  <text x="300" y="168" class="text" fill="#166534">CNS (Brain + Spinal Cord)</text>
  
  <rect x="780" y="150" width="240" height="36" class="box" fill="#fef3c7" stroke="#d97706"/>
  <text x="900" y="168" class="text" fill="#92400e">PNS (Nerves + Ganglia)</text>
  
  <!-- Arrows down -->
  <line x1="300" y1="186" x2="300" y2="230" class="arrow"/>
  <line x1="900" y1="186" x2="900" y2="230" class="arrow"/>
  
  <!-- Level 3: Components -->
  <rect x="120" y="230" width="160" height="50" class="box" fill="#e0e7ff" stroke="#4f46e5"/>
  <text x="200" y="248" class="text" fill="#3730a3">Neurons</text>
  <text x="200" y="265" class="text small" fill="#4338ca">Signal conduction</text>
  
  <rect x="320" y="230" width="160" height="50" class="box" fill="#e0e7ff" stroke="#4f46e5"/>
  <text x="400" y="248" class="text" fill="#3730a3">Glial Cells</text>
  <text x="400" y="265" class="text small" fill="#4338ca">Support &amp; myelination</text>
  
  <rect x="820" y="230" width="160" height="50" class="box" fill="#fef9c3" stroke="#ca8a04"/>
  <text x="900" y="248" class="text" fill="#854d0e">Schwann Cells</text>
  <text x="900" y="265" class="text small" fill="#a16207">PNS myelination</text>
  
  <!-- Level 4: Brain Regions -->
  <rect x="50" y="320" width="130" height="40" class="box" fill="#fce7f3" stroke="#db2777"/>
  <text x="115" y="340" class="text" fill="#9d174d">Forebrain</text>
  
  <rect x="200" y="320" width="130" height="40" class="box" fill="#fce7f3" stroke="#db2777"/>
  <text x="265" y="340" class="text" fill="#9d174d">Midbrain</text>
  
  <rect x="350" y="320" width="130" height="40" class="box" fill="#fce7f3" stroke="#db2777"/>
  <text x="415" y="340" class="text" fill="#9d174d">Hindbrain</text>
  
  <rect x="500" y="320" width="130" height="40" class="box" fill="#fce7f3" stroke="#db2777"/>
  <text x="565" y="340" class="text" fill="#9d174d">Cerebellum</text>
  
  <!-- Sub-labels for brain regions -->
  <text x="115" y="375" class="text small" fill="#be185d">Cortex, Thalamus, Hypothalamus</text>
  <text x="265" y="375" class="text small" fill="#be185d">Colliculi, Red Nucleus</text>
  <text x="415" y="375" class="text small" fill="#be185d">Pons, Medulla</text>
  <text x="565" y="375" class="text small" fill="#be185d">Coordination (~80% neurons)</text>
  
  <!-- Level 5: Functional Systems -->
  <rect x="80" y="420" width="200" height="50" class="box" fill="#f3e8ff" stroke="#9333ea"/>
  <text x="180" y="438" class="text" fill="#6b21a8">Motor Systems</text>
  <text x="180" y="455" class="text small" fill="#7e22ce">Corticospinal, Basal Ganglia, Cerebellum</text>
  
  <rect x="320" y="420" width="200" height="50" class="box" fill="#f3e8ff" stroke="#9333ea"/>
  <text x="420" y="438" class="text" fill="#6b21a8">Sensory Systems</text>
  <text x="420" y="455" class="text small" fill="#7e22ce">Visual, Auditory, Somatosensory</text>
  
  <rect x="560" y="420" width="200" height="50" class="box" fill="#f3e8ff" stroke="#9333ea"/>
  <text x="660" y="438" class="text" fill="#6b21a8">Autonomic Nervous System</text>
  <text x="660" y="455" class="text small" fill="#7e22ce">Sympathetic vs Parasympathetic</text>
  
  <!-- Arrows to clinical -->
  <line x1="180" y1="470" x2="180" y2="520" class="darrow"/>
  <line x1="420" y1="470" x2="420" y2="520" class="darrow"/>
  <line x1="660" y1="470" x2="660" y2="520" class="darrow"/>
  
  <!-- Level 6: Clinical Correlation -->
  <rect x="50" y="520" width="160" height="50" class="box" fill="#fee2e2" stroke="#dc2626"/>
  <text x="130" y="538" class="text" fill="#991b1b">Stroke</text>
  <text x="130" y="555" class="text small" fill="#b91c1c">Internal capsule lesion</text>
  
  <rect x="240" y="520" width="160" height="50" class="box" fill="#fee2e2" stroke="#dc2626"/>
  <text x="320" y="538" class="text" fill="#991b1b">Parkinson's</text>
  <text x="320" y="555" class="text small" fill="#b91c1c">Substantia nigra degeneration</text>
  
  <rect x="430" y="520" width="160" height="50" class="box" fill="#fee2e2" stroke="#dc2626"/>
  <text x="510" y="538" class="text" fill="#991b1b">Multiple Sclerosis</text>
  <text x="510" y="555" class="text small" fill="#b91c1c">Demyelination (oligodendrocytes)</text>
  
  <rect x="620" y="520" width="160" height="50" class="box" fill="#fee2e2" stroke="#dc2626"/>
  <text x="700" y="538" class="text" fill="#991b1b">Epilepsy</text>
  <text x="700" y="555" class="text small" fill="#b91c1c">Cortical hyperexcitability</text>
  
  <rect x="810" y="520" width="160" height="50" class="box" fill="#fee2e2" stroke="#dc2626"/>
  <text x="890" y="538" class="text" fill="#991b1b">Alzheimer's</text>
  <text x="890" y="555" class="text small" fill="#b91c1c">Hippocampal → cortical atrophy</text>
  
  <!-- Core principle -->
  <rect x="150" y="620" width="900" height="40" class="box" fill="#f1f5f9" stroke="#475569"/>
  <text x="600" y="640" class="text" fill="#334155">Core Principle: Histology → Anatomy → Function → Clinical Signs</text>
  
  <!-- Spinal cord detail -->
  <rect x="750" y="320" width="200" height="50" class="box" fill="#ecfccb" stroke="#65a30d"/>
  <text x="850" y="338" class="text" fill="#3f6212">Spinal Cord</text>
  <text x="850" y="355" class="text small" fill="#4d7c0f">Grey matter, White matter tracts</text>
  
  <rect x="750" y="390" width="200" height="40" class="box" fill="#ecfccb" stroke="#65a30d"/>
  <text x="850" y="410" class="text small" fill="#3f6212">Ascending &amp; Descending Pathways</text>
  
  <line x1="850" y1="370" x2="850" y2="390" class="arrow"/>
  
  <!-- Legend -->
  <text x="50" y="720" class="text small" fill="#64748b">Color Key:</text>
  <rect x="140" y="708" width="16" height="16" fill="#dbeafe" stroke="#2563eb" rx="3"/>
  <text x="165" y="720" class="text small" fill="#475569">Development</text>
  
  <rect x="260" y="708" width="16" height="16" fill="#dcfce7" stroke="#16a34a" rx="3"/>
  <text x="285" y="720" class="text small" fill="#475569">CNS</text>
  
  <rect x="340" y="708" width="16" height="16" fill="#fef3c7" stroke="#d97706" rx="3"/>
  <text x="365" y="720" class="text small" fill="#475569">PNS</text>
  
  <rect x="420" y="708" width="16" height="16" fill="#fce7f3" stroke="#db2777" rx="3"/>
  <text x="445" y="720" class="text small" fill="#475569">Brain Regions</text>
  
  <rect x="550" y="708" width="16" height="16" fill="#f3e8ff" stroke="#9333ea" rx="3"/>
  <text x="575" y="720" class="text small" fill="#475569">Functional Systems</text>
  
  <rect x="720" y="708" width="16" height="16" fill="#fee2e2" stroke="#dc2626" rx="3"/>
  <text x="745" y="720" class="text small" fill="#475569">Clinical Disorders</text>
</svg>'''

with open('concept-map.svg', 'w') as f:
    f.write(svg)

print("Generated concept-map.svg")
