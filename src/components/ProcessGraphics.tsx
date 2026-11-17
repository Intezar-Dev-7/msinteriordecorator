import React from 'react';
import { motion } from 'motion/react';

// Phase 01 Graphic: Blueprint & Discovery
export const BlueprintGraphic: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[260px] sm:min-h-[300px] flex items-center justify-center p-4">
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full max-w-[380px] max-h-[280px] drop-shadow-md select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Blueprint Paper Background */}
        <rect
          x="20"
          y="20"
          width="360"
          height="260"
          rx="16"
          fill="#1C1917"
          stroke="#9A7B52"
          strokeWidth="1.5"
          strokeOpacity="0.4"
        />

        {/* Blueprint Grid Lines */}
        <g opacity="0.15">
          {[...Array(11)].map((_, i) => (
            <line
              key={`h-${i}`}
              x1="30"
              y1={40 + i * 22}
              x2="370"
              y2={40 + i * 22}
              stroke="#D4B68D"
              strokeWidth="0.8"
              strokeDasharray="3 3"
            />
          ))}
          {[...Array(15)].map((_, i) => (
            <line
              key={`v-${i}`}
              x1={42 + i * 22}
              y1="30"
              x2={42 + i * 22}
              y2="270"
              stroke="#D4B68D"
              strokeWidth="0.8"
              strokeDasharray="3 3"
            />
          ))}
        </g>

        {/* Animated Room Walls (Drawing effect) */}
        <motion.rect
          x="60"
          y="60"
          width="280"
          height="180"
          rx="6"
          stroke="#D4B68D"
          strokeWidth="2.5"
          fill="#FAF8F5"
          fillOpacity="0.04"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
        />

        {/* Inner Partition Walls */}
        <motion.path
          d="M 60 150 L 190 150 L 190 60 M 230 60 L 230 130 L 340 130"
          stroke="#9A7B52"
          strokeWidth="2"
          strokeDasharray="4 2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, delay: 0.5, ease: 'easeInOut' }}
        />

        {/* Dimension Annotations */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {/* Dimension Line Top */}
          <line x1="60" y1="48" x2="340" y2="48" stroke="#D4B68D" strokeWidth="1" />
          <line x1="60" y1="44" x2="60" y2="52" stroke="#D4B68D" strokeWidth="1" />
          <line x1="340" y1="44" x2="340" y2="52" stroke="#D4B68D" strokeWidth="1" />
          <rect x="175" y="38" width="50" height="18" rx="4" fill="#1C1917" />
          <text
            x="200"
            y="51"
            textAnchor="middle"
            fill="#D4B68D"
            fontSize="10"
            fontFamily="monospace"
            letterSpacing="0.08em"
          >
            24' - 0"
          </text>
        </motion.g>

        {/* Animated Drawing Compass */}
        <motion.g
          animate={{
            rotate: [0, 25, -20, 0],
            x: [0, 10, -5, 0],
            y: [0, -5, 5, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ originX: '150px', originY: '190px' }}
        >
          {/* Drafting Circle Arc */}
          <motion.circle
            cx="150"
            cy="190"
            r="38"
            stroke="#D4B68D"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            fill="none"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />

          {/* Compass Instrument */}
          <circle cx="150" cy="190" r="4" fill="#D4B68D" />
          <line x1="150" y1="190" x2="182" y2="165" stroke="#FAF8F5" strokeWidth="2" strokeLinecap="round" />
          <line x1="150" y1="190" x2="128" y2="165" stroke="#9A7B52" strokeWidth="2" strokeLinecap="round" />
          <circle cx="155" cy="162" r="3" fill="#D4B68D" />
        </motion.g>

        {/* Color Palette Swatches on the Right */}
        <g transform="translate(250, 155)">
          <motion.rect
            x="0"
            y="0"
            width="22"
            height="32"
            rx="4"
            fill="#FAF8F5"
            stroke="#1C1917"
            strokeWidth="1"
            initial={{ rotate: -15, scale: 0.9 }}
            animate={{ rotate: [-15, -12, -15] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.rect
            x="14"
            y="0"
            width="22"
            height="32"
            rx="4"
            fill="#9A7B52"
            stroke="#1C1917"
            strokeWidth="1"
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          />
          <motion.rect
            x="28"
            y="0"
            width="22"
            height="32"
            rx="4"
            fill="#D4B68D"
            stroke="#1C1917"
            strokeWidth="1"
            initial={{ rotate: 15 }}
            animate={{ rotate: [15, 18, 15] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          />
        </g>

        {/* Status Badge */}
        <rect x="75" y="75" width="80" height="22" rx="11" fill="#2C2724" stroke="#9A7B52" strokeWidth="1" />
        <circle cx="87" cy="86" r="3" fill="#22C55E" />
        <text x="120" y="90" textAnchor="middle" fill="#FAF8F5" fontSize="9" fontWeight="600" letterSpacing="0.1em">
          CLIENT BRIEF
        </text>
      </svg>
    </div>
  );
};

// Phase 02 Graphic: 3D Visualization & Modeling
export const Render3DGraphic: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[260px] sm:min-h-[300px] flex items-center justify-center p-4">
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full max-w-[380px] max-h-[280px] drop-shadow-md select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Dark Architectural Stage */}
        <rect
          x="20"
          y="20"
          width="360"
          height="260"
          rx="16"
          fill="#1C1917"
          stroke="#9A7B52"
          strokeWidth="1.5"
          strokeOpacity="0.4"
        />

        {/* Isometric Grid Floor */}
        <g opacity="0.25">
          <path
            d="M 200 130 L 330 200 L 200 270 L 70 200 Z"
            stroke="#D4B68D"
            strokeWidth="1.2"
            fill="#FAF8F5"
            fillOpacity="0.03"
          />
          {/* Isometric Tile Lines */}
          <line x1="167" y1="147" x2="297" y2="217" stroke="#D4B68D" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="135" y1="165" x2="265" y2="235" stroke="#D4B68D" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="102" y1="182" x2="232" y2="252" stroke="#D4B68D" strokeWidth="0.8" strokeDasharray="3 3" />

          <line x1="232" y1="147" x2="102" y2="217" stroke="#D4B68D" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="265" y1="165" x2="135" y2="235" stroke="#D4B68D" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="297" y1="182" x2="167" y2="252" stroke="#D4B68D" strokeWidth="0.8" strokeDasharray="3 3" />
        </g>

        {/* Isometric Walls */}
        <g opacity="0.8">
          {/* Left Wall */}
          <polygon
            points="70,200 70,80 200,30 200,130"
            fill="#26221F"
            stroke="#9A7B52"
            strokeWidth="1"
          />
          {/* Right Wall */}
          <polygon
            points="200,130 200,30 330,80 330,200"
            fill="#332D29"
            stroke="#D4B68D"
            strokeWidth="1"
          />
        </g>

        {/* Wall Art Frame on Left Wall */}
        <polygon
          points="95,145 95,95 145,75 145,125"
          fill="#FAF8F5"
          fillOpacity="0.9"
          stroke="#9A7B52"
          strokeWidth="1.2"
        />

        {/* Floating 3D Living Room Furniture (Animated hover) */}
        <motion.g
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Modern Sofa Geometry */}
          <polygon
            points="140,200 185,175 235,198 190,225"
            fill="#D4B68D"
            stroke="#FAF8F5"
            strokeWidth="1.2"
          />
          <polygon
            points="140,200 190,225 190,235 140,210"
            fill="#9A7B52"
            stroke="#1C1917"
            strokeWidth="1"
          />
          <polygon
            points="190,225 235,198 235,208 190,235"
            fill="#6E5637"
            stroke="#1C1917"
            strokeWidth="1"
          />

          {/* Coffee Table Glass Top */}
          <polygon
            points="210,175 240,160 270,174 240,190"
            fill="#FAF8F5"
            fillOpacity="0.4"
            stroke="#FAF8F5"
            strokeWidth="1.2"
          />
        </motion.g>

        {/* Pendant Chandelier Hanging from Ceiling */}
        <line x1="200" y1="30" x2="200" y2="95" stroke="#D4B68D" strokeWidth="1.2" />
        <motion.g
          animate={{ scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <circle cx="200" cy="100" r="10" fill="#D4B68D" fillOpacity="0.8" />
          <circle cx="200" cy="100" r="22" fill="#D4B68D" fillOpacity="0.15" />
          <circle cx="200" cy="100" r="35" fill="#D4B68D" fillOpacity="0.06" />
        </motion.g>

        {/* Holographic Laser Scan Sweep (Vertical 3D Scanning Line) */}
        <motion.g
          animate={{ y: [40, 240, 40] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <line
            x1="60"
            y1="0"
            x2="340"
            y2="0"
            stroke="#22C55E"
            strokeWidth="1.5"
            strokeDasharray="6 3"
            strokeOpacity="0.9"
          />
          <line
            x1="60"
            y1="0"
            x2="340"
            y2="0"
            stroke="#22C55E"
            strokeWidth="6"
            strokeOpacity="0.15"
          />
        </motion.g>

        {/* Engine Badge */}
        <rect x="75" y="45" width="95" height="22" rx="11" fill="#2C2724" stroke="#9A7B52" strokeWidth="1" />
        <circle cx="87" cy="56" r="3" fill="#D4B68D" />
        <text x="130" y="60" textAnchor="middle" fill="#FAF8F5" fontSize="9" fontWeight="600" letterSpacing="0.1em">
          3D REAL-VIEW
        </text>
      </svg>
    </div>
  );
};

// Phase 03 Graphic: On-Site Craftsmanship & Build
export const CraftsmanshipGraphic: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[260px] sm:min-h-[300px] flex items-center justify-center p-4">
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full max-w-[380px] max-h-[280px] drop-shadow-md select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Dark Workshop Background */}
        <rect
          x="20"
          y="20"
          width="360"
          height="260"
          rx="16"
          fill="#1C1917"
          stroke="#9A7B52"
          strokeWidth="1.5"
          strokeOpacity="0.4"
        />

        {/* Workbench Top Surface */}
        <rect x="50" y="190" width="300" height="18" rx="4" fill="#3D352F" stroke="#9A7B52" strokeWidth="1" />
        <line x1="70" y1="208" x2="70" y2="260" stroke="#2B2521" strokeWidth="6" strokeLinecap="round" />
        <line x1="330" y1="208" x2="330" y2="260" stroke="#2B2521" strokeWidth="6" strokeLinecap="round" />

        {/* Precision Dovetail Wood Joint Fitting Together */}
        <g transform="translate(130, 80)">
          {/* Left Timber Piece */}
          <motion.path
            d="M 0 0 L 60 0 L 60 25 L 45 40 L 45 65 L 60 80 L 60 100 L 0 100 Z"
            fill="#9A7B52"
            stroke="#D4B68D"
            strokeWidth="1.5"
            animate={{ x: [-8, 0, -8] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Right Timber Piece with Complementary Joint */}
          <motion.path
            d="M 130 0 L 70 0 L 70 25 L 85 40 L 85 65 L 70 80 L 70 100 L 130 100 Z"
            fill="#D4B68D"
            stroke="#FAF8F5"
            strokeWidth="1.5"
            animate={{ x: [8, 0, 8] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Wood Grain Lines */}
          <path d="M 15 15 Q 30 30 15 50" stroke="#7A5E3A" strokeWidth="1" fill="none" opacity="0.5" />
          <path d="M 115 25 Q 100 45 115 70" stroke="#B8966B" strokeWidth="1" fill="none" opacity="0.5" />
        </g>

        {/* Precision Spirit Level (Centered Bubble Animation) */}
        <g transform="translate(100, 215)">
          <rect x="0" y="0" width="200" height="24" rx="6" fill="#29231E" stroke="#D4B68D" strokeWidth="1.2" />
          {/* Level Glass Chamber */}
          <rect x="75" y="4" width="50" height="16" rx="4" fill="#1C1917" stroke="#7A6856" strokeWidth="0.8" />
          <line x1="90" y1="4" x2="90" y2="20" stroke="#9A7B52" strokeWidth="1" />
          <line x1="110" y1="4" x2="110" y2="20" stroke="#9A7B52" strokeWidth="1" />
          {/* Animated Spirit Bubble */}
          <motion.circle
            cx="100"
            cy="12"
            r="5"
            fill="#22C55E"
            animate={{ cx: [96, 104, 100] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </g>

        {/* Laser Level Guide Line (Glowing horizontal pulse) */}
        <motion.g
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <line x1="40" y1="135" x2="360" y2="135" stroke="#EF4444" strokeWidth="1.2" strokeDasharray="5 3" />
          <circle cx="40" cy="135" r="3" fill="#EF4444" />
        </motion.g>

        {/* Ruler Measurement Tape on the Left */}
        <g transform="translate(60, 50)">
          <rect x="0" y="0" width="22" height="120" rx="3" fill="#D4B68D" stroke="#1C1917" strokeWidth="1" />
          {[...Array(11)].map((_, i) => (
            <line
              key={i}
              x1={i % 2 === 0 ? "8" : "13"}
              y1={10 + i * 10}
              x2="22"
              y2={10 + i * 10}
              stroke="#1C1917"
              strokeWidth="1"
            />
          ))}
        </g>

        {/* Status Badge */}
        <rect x="250" y="45" width="95" height="22" rx="11" fill="#2C2724" stroke="#9A7B52" strokeWidth="1" />
        <circle cx="262" cy="56" r="3" fill="#EAB308" />
        <text x="303" y="60" textAnchor="middle" fill="#FAF8F5" fontSize="9" fontWeight="600" letterSpacing="0.1em">
          PRECISION FIT
        </text>
      </svg>
    </div>
  );
};

// Phase 04 Graphic: Deep Clean & Key Handover
export const HandoverGraphic: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[260px] sm:min-h-[300px] flex items-center justify-center p-4">
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full max-w-[380px] max-h-[280px] drop-shadow-md select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Dark Architectural Stage */}
        <rect
          x="20"
          y="20"
          width="360"
          height="260"
          rx="16"
          fill="#1C1917"
          stroke="#9A7B52"
          strokeWidth="1.5"
          strokeOpacity="0.4"
        />

        {/* Elegant Welcoming Arched Doorway */}
        <g transform="translate(130, 45)">
          {/* Outer Arch Frame */}
          <path
            d="M 0 210 L 0 70 A 70 70 0 0 1 140 70 L 140 210 Z"
            fill="#29231E"
            stroke="#9A7B52"
            strokeWidth="2"
          />

          {/* Warm Radiant Light from Within the Completed Home */}
          <motion.path
            d="M 12 205 L 12 75 A 58 58 0 0 1 128 75 L 128 205 Z"
            fill="url(#warmGlowGradient)"
            animate={{ opacity: [0.75, 1, 0.75] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Luxury Double Doors Slightly Ajar */}
          <motion.path
            d="M 14 205 L 14 76 A 56 56 0 0 1 68 30 L 68 205 Z"
            fill="#1E1A17"
            stroke="#D4B68D"
            strokeWidth="1.2"
            animate={{ skewY: [0, -3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.path
            d="M 126 205 L 126 76 A 56 56 0 0 0 72 30 L 72 205 Z"
            fill="#231E1B"
            stroke="#D4B68D"
            strokeWidth="1.2"
            animate={{ skewY: [0, 3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Brass Door Handles */}
          <circle cx="64" cy="130" r="3" fill="#D4B68D" />
          <circle cx="76" cy="130" r="3" fill="#D4B68D" />
        </g>

        {/* Defs for Radiant Light */}
        <defs>
          <radialGradient id="warmGlowGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F5D0A9" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#D4B68D" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#9A7B52" stopOpacity="0.1" />
          </radialGradient>
        </defs>

        {/* Polished Floating Brass Key with Gleam */}
        <motion.g
          animate={{
            y: [0, -8, 0],
            rotate: [0, 6, -4, 0],
          }}
          transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ originX: '200px', originY: '175px' }}
        >
          {/* Key Ring / Bow */}
          <circle cx="200" cy="170" r="16" stroke="#FAF8F5" strokeWidth="4" fill="#D4B68D" />
          <circle cx="200" cy="170" r="8" fill="#1C1917" />

          {/* Key Shaft */}
          <rect x="198" y="186" width="4" height="42" rx="2" fill="#FAF8F5" />
          {/* Key Teeth / Bit */}
          <rect x="202" y="210" width="9" height="4" rx="1" fill="#FAF8F5" />
          <rect x="202" y="218" width="12" height="4" rx="1" fill="#FAF8F5" />

          {/* Gleam Sparkle on Key */}
          <motion.g
            animate={{
              scale: [0.6, 1.2, 0.6],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <circle cx="200" cy="170" r="3" fill="#FFFFFF" />
            <line x1="200" y1="162" x2="200" y2="178" stroke="#FFFFFF" strokeWidth="1.5" />
            <line x1="192" y1="170" x2="208" y2="170" stroke="#FFFFFF" strokeWidth="1.5" />
          </motion.g>
        </motion.g>

        {/* Floating Sparkles in the Room */}
        <motion.g
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          <circle cx="85" cy="120" r="2.5" fill="#D4B68D" />
          <circle cx="310" cy="130" r="2" fill="#FAF8F5" />
          <circle cx="95" cy="200" r="1.5" fill="#D4B68D" />
          <circle cx="300" cy="210" r="2.5" fill="#FAF8F5" />
        </motion.g>

        {/* Status Badge */}
        <rect x="75" y="45" width="95" height="22" rx="11" fill="#2C2724" stroke="#9A7B52" strokeWidth="1" />
        <circle cx="87" cy="56" r="3" fill="#22C55E" />
        <text x="130" y="60" textAnchor="middle" fill="#FAF8F5" fontSize="9" fontWeight="600" letterSpacing="0.1em">
          READY TO LIVE
        </text>
      </svg>
    </div>
  );
};
