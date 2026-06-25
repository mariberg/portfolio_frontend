function OakBedrockDiagram() {
  return (
    <svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="ob-arrow" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto">
          <path d="M0,0 L0,5 L7,2.5 z" fill="#2d9e7e" opacity="0.7" />
        </marker>
        <marker id="ob-arrow-pink" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto">
          <path d="M0,0 L0,5 L7,2.5 z" fill="#d64d7a" opacity="0.7" />
        </marker>
      </defs>

      {/* S3 Input */}
      <rect x="20" y="120" width="110" height="80" rx="6" fill="rgba(16,26,21,0.95)" stroke="#2d9e7e" strokeWidth="1.6" />
      <text x="75" y="148" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="14" fill="#dff0eb" fontWeight="700">S3 Bucket</text>
      <text x="75" y="168" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="11" fill="#6b9080">PDF Upload</text>
      <text x="75" y="186" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="11" fill="#6b9080">Event Trigger</text>

      {/* Arrow to Lambda */}
      <line x1="130" y1="160" x2="178" y2="160" stroke="#2d9e7e" strokeWidth="1.3" strokeDasharray="4,3" markerEnd="url(#ob-arrow)" opacity="0.7" />

      {/* Lambda */}
      <rect x="180" y="120" width="120" height="80" rx="6" fill="rgba(16,26,21,0.95)" stroke="#2d9e7e" strokeWidth="1.6" />
      <text x="240" y="148" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="14" fill="#dff0eb" fontWeight="700">Lambda</text>
      <text x="240" y="168" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="11" fill="#6b9080">TypeScript</text>
      <text x="240" y="186" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="11" fill="#6b9080">Pipeline Logic</text>

      {/* Arrow to Nova Lite */}
      <line x1="300" y1="140" x2="368" y2="80" stroke="#d64d7a" strokeWidth="1.3" strokeDasharray="4,3" markerEnd="url(#ob-arrow-pink)" opacity="0.6" />

      {/* Arrow to Nova Canvas */}
      <line x1="300" y1="180" x2="368" y2="230" stroke="#d64d7a" strokeWidth="1.3" strokeDasharray="4,3" markerEnd="url(#ob-arrow-pink)" opacity="0.6" />

      {/* Nova Lite */}
      <rect x="370" y="40" width="130" height="80" rx="6" fill="rgba(16,26,21,0.95)" stroke="#d64d7a" strokeWidth="1.6" />
      <text x="435" y="68" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="14" fill="#e87da0" fontWeight="700">Nova Lite</text>
      <text x="435" y="88" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="11" fill="#6b9080">Text Extraction</text>
      <text x="435" y="106" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="11" fill="#6b9080">Quiz Generation</text>

      {/* Nova Canvas */}
      <rect x="370" y="200" width="130" height="80" rx="6" fill="rgba(16,26,21,0.95)" stroke="#d64d7a" strokeWidth="1.6" />
      <text x="435" y="228" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="14" fill="#e87da0" fontWeight="700">Nova Canvas</text>
      <text x="435" y="248" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="11" fill="#6b9080">Image Generation</text>
      <text x="435" y="266" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="11" fill="#6b9080">Contextual Art</text>

      {/* Arrow to Output S3 */}
      <line x1="500" y1="80" x2="528" y2="140" stroke="#2d9e7e" strokeWidth="1.3" strokeDasharray="4,3" markerEnd="url(#ob-arrow)" opacity="0.6" />
      <line x1="500" y1="240" x2="528" y2="180" stroke="#2d9e7e" strokeWidth="1.3" strokeDasharray="4,3" markerEnd="url(#ob-arrow)" opacity="0.6" />

      {/* Output S3 */}
      <rect x="530" y="120" width="60" height="80" rx="6" fill="rgba(16,26,21,0.95)" stroke="#2d9e7e" strokeWidth="1.6" />
      <text x="560" y="153" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="12" fill="#dff0eb" fontWeight="700">S3</text>
      <text x="560" y="170" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="10" fill="#6b9080">Output</text>
      <text x="560" y="185" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="10" fill="#6b9080">Quiz +</text>
      <text x="560" y="197" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="10" fill="#6b9080">Images</text>
    </svg>
  )
}

export default OakBedrockDiagram
