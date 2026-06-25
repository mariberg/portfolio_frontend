function GardeningDiagram() {
  return (
    <svg viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="gd-arrow" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto">
          <path d="M0,0 L0,5 L7,2.5 z" fill="#2d9e7e" opacity="0.7" />
        </marker>
        <marker id="gd-arrow-pink" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto">
          <path d="M0,0 L0,5 L7,2.5 z" fill="#d64d7a" opacity="0.7" />
        </marker>
      </defs>

      {/* User */}
      <rect x="20" y="140" width="100" height="70" rx="6" fill="rgba(16,26,21,0.95)" stroke="#1e3028" strokeWidth="1.5" />
      <text x="70" y="170" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="14" fill="#dff0eb" fontWeight="700">User</text>
      <text x="70" y="190" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="11" fill="#6b9080">Chat Interface</text>

      {/* Arrow to Strands Agent */}
      <line x1="120" y1="175" x2="168" y2="175" stroke="#2d9e7e" strokeWidth="1.3" strokeDasharray="4,3" markerEnd="url(#gd-arrow)" opacity="0.7" />

      {/* Strands Agent */}
      <rect x="170" y="120" width="130" height="110" rx="6" fill="rgba(16,26,21,0.95)" stroke="#d64d7a" strokeWidth="1.6" />
      <text x="235" y="150" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="14" fill="#e87da0" fontWeight="700">Strands Agent</text>
      <text x="235" y="170" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="11" fill="#6b9080">Orchestration</text>
      <text x="235" y="188" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="11" fill="#6b9080">Tool Selection</text>
      <text x="235" y="206" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="11" fill="#6b9080">Reasoning</text>

      {/* Arrow to Bedrock */}
      <line x1="300" y1="145" x2="368" y2="80" stroke="#d64d7a" strokeWidth="1.3" strokeDasharray="4,3" markerEnd="url(#gd-arrow-pink)" opacity="0.6" />

      {/* Bedrock */}
      <rect x="370" y="40" width="120" height="70" rx="6" fill="rgba(16,26,21,0.95)" stroke="#d64d7a" strokeWidth="1.6" />
      <text x="430" y="68" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="14" fill="#e87da0" fontWeight="700">Bedrock</text>
      <text x="430" y="88" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="11" fill="#6b9080">Claude (LLM)</text>

      {/* Arrow to DynamoDB */}
      <line x1="300" y1="175" x2="368" y2="175" stroke="#2d9e7e" strokeWidth="1.3" strokeDasharray="4,3" markerEnd="url(#gd-arrow)" opacity="0.7" />

      {/* DynamoDB */}
      <rect x="370" y="145" width="120" height="70" rx="6" fill="rgba(16,26,21,0.95)" stroke="#2d9e7e" strokeWidth="1.6" />
      <text x="430" y="173" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="14" fill="#dff0eb" fontWeight="700">DynamoDB</text>
      <text x="430" y="193" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="11" fill="#6b9080">Plant Profiles</text>

      {/* Arrow to Weather API */}
      <line x1="300" y1="210" x2="368" y2="275" stroke="#2d9e7e" strokeWidth="1.3" strokeDasharray="4,3" markerEnd="url(#gd-arrow)" opacity="0.7" />

      {/* Weather API */}
      <rect x="370" y="250" width="120" height="70" rx="6" fill="rgba(16,26,21,0.95)" stroke="#2d9e7e" strokeWidth="1.6" />
      <text x="430" y="278" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="14" fill="#dff0eb" fontWeight="700">Weather API</text>
      <text x="430" y="298" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="11" fill="#6b9080">Real-time Data</text>

      {/* Lambda label */}
      <rect x="510" y="145" width="80" height="70" rx="6" fill="rgba(16,26,21,0.95)" stroke="#1e3028" strokeWidth="1.3" />
      <text x="550" y="173" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="13" fill="#dff0eb" fontWeight="700">Lambda</text>
      <text x="550" y="193" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="10" fill="#6b9080">Python Runtime</text>

      {/* Connector */}
      <line x1="490" y1="180" x2="508" y2="180" stroke="#1e3028" strokeWidth="1" strokeDasharray="3,3" opacity="0.5" />
    </svg>
  )
}

export default GardeningDiagram
