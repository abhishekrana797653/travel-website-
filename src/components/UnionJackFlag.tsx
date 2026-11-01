import React from 'react';

interface UnionJackFlagProps {
  className?: string;
  size?: number;
}

/**
 * High precision SVG Union Jack (UK Flag) component
 */
export const UnionJackFlag: React.FC<UnionJackFlagProps> = ({
  className = '',
  size = 28,
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full overflow-hidden shadow-sm shrink-0 ${className}`}
      style={{ width: size, height: size }}
      title="United Kingdom (English)"
      aria-label="United Kingdom region selected"
    >
      <svg
        viewBox="0 0 60 60"
        width={size}
        height={size}
        className="w-full h-full object-cover"
        aria-hidden="true"
      >
        <clipPath id="circle-clip">
          <circle cx="30" cy="30" r="30" />
        </clipPath>
        <g clipPath="url(#circle-clip)">
          {/* Blue background */}
          <rect width="60" height="60" fill="#012169" />

          {/* White diagonals */}
          <path d="M0,0 L60,60 M60,0 L0,60" stroke="#FFFFFF" strokeWidth="10" />

          {/* Red diagonals (saltire pinwheel) */}
          {/* Top-left to bottom-right red */}
          <path d="M0,0 L30,30" stroke="#C8102E" strokeWidth="3.3" />
          <path d="M60,60 L30,30" stroke="#C8102E" strokeWidth="3.3" />

          {/* Top-right to bottom-left red */}
          <path d="M60,0 L30,30" stroke="#C8102E" strokeWidth="3.3" />
          <path d="M0,60 L30,30" stroke="#C8102E" strokeWidth="3.3" />

          {/* White cross */}
          <path d="M30,0 v60 M0,30 h60" stroke="#FFFFFF" strokeWidth="16" />

          {/* Red cross */}
          <path d="M30,0 v60 M0,30 h60" stroke="#C8102E" strokeWidth="9.6" />
        </g>
      </svg>
    </div>
  );
};
