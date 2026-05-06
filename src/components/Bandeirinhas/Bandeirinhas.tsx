
type Flag = {
  x: number;
  y: number;
  fill: string;
  stroke: string;
  rotate: number;
  scale: number;
};

const baseFlags = [
  { fill: "url(#red-floral)", stroke: "#9f1d1d" },
  { fill: "url(#green-check)", stroke: "#1b5e20" },
  { fill: "url(#blue-stars)", stroke: "#01579b" },
  { fill: "url(#yellow-zigzag)", stroke: "#b26a00" },
  { fill: "url(#orange-dots)", stroke: "#bf360c" },
  { fill: "url(#purple-floral)", stroke: "#4a148c" },
  { fill: "url(#cyan-stripes)", stroke: "#006064" },
  { fill: "url(#pink-check)", stroke: "#880e4f" },
  { fill: "url(#lime-dots)", stroke: "#827717" },
  { fill: "url(#brown-plaid)", stroke: "#5d3213" },
];

const customOffsets = [
  { y: 2, rotate: -8 },
  { y: -1, rotate: 4 },
  { y: 1, rotate: -3 },
  { y: 6, rotate: 7 },
  { y: 14, rotate: -6 },
  { y: 12, rotate: 3 },
  { y: 10, rotate: -4 },
  { y: 3, rotate: 6 },
  { y: -5, rotate: -5 },
  { y: -11, rotate: 2 },
  { y: -4, rotate: -7 },
  { y: 7, rotate: 4 },
];

const flags: Flag[] = Array.from({ length: 12 }).map((_, i) => {
  const pattern = baseFlags[i % baseFlags.length];
  const offset = customOffsets[i];

  const x = 12 + i * 58;

  const ropeY =
    22 - Math.sin((x / 650) * Math.PI * 2.1) * 8;

  return {
    x,

    // agora cada uma tem posição própria
    y: ropeY + offset.y,

    rotate: offset.rotate,

    scale: [0.92, 1.04, 0.98, 1.08, 0.94, 1][i % 6],

    ...pattern,
  };
});

export default function Bandeirinhas() {
  const width = 42;
  const height = 54;
  const notchDepth = 9;

  return (
    <div className="pointer-events-none w-full overflow-hidden">
      <style>{`
        @keyframes flagSwing {
          0%, 100% {
            transform: rotate(var(--rotate)) scale(var(--scale)) translateY(0);
          }
          50% {
            transform: rotate(calc(var(--rotate) * -0.55)) scale(var(--scale)) translateY(2px);
          }
        }

        .junina-flag {
          transform-box: fill-box;
          transform-origin: 50% 0%;
          animation: flagSwing 3.8s ease-in-out infinite;
          filter: drop-shadow(0 5px 6px rgba(60, 25, 8, .28));
        }

        .rope {
          filter: drop-shadow(0 2px 2px rgba(70, 35, 12, .25));
        }

        .paper-light {
          opacity: .28;
          mix-blend-mode: screen;
        }

        .paper-shadow {
          opacity: .18;
          mix-blend-mode: multiply;
        }

        .tiny-knot {
          filter: drop-shadow(0 1px 1px rgba(0,0,0,.25));
        }
      `}</style>

      <svg
        width="100%"
        viewBox="0 0 650 105"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Bandeirinhas juninas decorativas"
      >
        <defs>
          <linearGradient id="ropeGrad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#b9854c" />
            <stop offset="52%" stopColor="#8a5428" />
            <stop offset="100%" stopColor="#5f3518" />
          </linearGradient>

          <linearGradient id="flagLight" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity=".65" />
            <stop offset="45%" stopColor="#ffffff" stopOpacity=".18" />
            <stop offset="100%" stopColor="#000000" stopOpacity=".15" />
          </linearGradient>

          <pattern id="red-floral" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
            <rect width="18" height="18" fill="#d9382e" />
            <circle cx="5" cy="5" r="2" fill="#ffd36b" opacity=".9" />
            <circle cx="13" cy="13" r="2" fill="#fff3c4" opacity=".75" />
            <path d="M5 2v6M2 5h6" stroke="#fff" strokeWidth="1" opacity=".45" />
          </pattern>

          <pattern id="green-check" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
            <rect width="14" height="14" fill="#3fa34d" />
            <rect width="7" height="7" fill="#2f8a3d" opacity=".75" />
            <rect x="7" y="7" width="7" height="7" fill="#2f8a3d" opacity=".75" />
            <path d="M0 0h14M0 7h14M7 0v14" stroke="#fff" strokeWidth=".8" opacity=".25" />
          </pattern>

          <pattern id="blue-stars" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
            <rect width="18" height="18" fill="#1687c9" />
            <path d="M9 2l1.5 4.2H15l-3.5 2.6 1.3 4.2L9 10.4 5.2 13l1.3-4.2L3 6.2h4.5L9 2z" fill="#fff3b0" opacity=".75" />
          </pattern>

          <pattern id="yellow-zigzag" x="0" y="0" width="14" height="10" patternUnits="userSpaceOnUse">
            <rect width="14" height="10" fill="#f7c948" />
            <path d="M0 3l3.5 4L7 3l3.5 4L14 3" fill="none" stroke="#c76b00" strokeWidth="1.4" opacity=".65" />
          </pattern>

          <pattern id="orange-dots" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
            <rect width="12" height="12" fill="#f57c1f" />
            <circle cx="3" cy="3" r="1.5" fill="#fff0bd" opacity=".65" />
            <circle cx="9" cy="9" r="1.5" fill="#fff0bd" opacity=".65" />
          </pattern>

          <pattern id="purple-floral" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
            <rect width="18" height="18" fill="#7b2cbf" />
            <circle cx="9" cy="9" r="2.2" fill="#ffd166" />
            <circle cx="9" cy="5" r="1.8" fill="#ffafcc" opacity=".75" />
            <circle cx="13" cy="9" r="1.8" fill="#ffafcc" opacity=".75" />
            <circle cx="9" cy="13" r="1.8" fill="#ffafcc" opacity=".75" />
            <circle cx="5" cy="9" r="1.8" fill="#ffafcc" opacity=".75" />
          </pattern>

          <pattern id="cyan-stripes" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(25)">
            <rect width="14" height="14" fill="#00a6b7" />
            <rect x="0" y="0" width="5" height="14" fill="#fdf0c4" opacity=".55" />
          </pattern>

          <pattern id="pink-check" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
            <rect width="14" height="14" fill="#e8488a" />
            <rect width="7" height="7" fill="#c72f70" opacity=".65" />
            <rect x="7" y="7" width="7" height="7" fill="#c72f70" opacity=".65" />
          </pattern>

          <pattern id="lime-dots" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
            <rect width="12" height="12" fill="#b6d936" />
            <circle cx="6" cy="6" r="2" fill="#4d6b13" opacity=".45" />
          </pattern>

          <pattern id="brown-plaid" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <rect width="16" height="16" fill="#c27a3a" />
            <rect x="0" y="0" width="16" height="5" fill="#8a4b24" opacity=".35" />
            <rect x="0" y="0" width="5" height="16" fill="#fff0bd" opacity=".35" />
            <path d="M0 8h16M8 0v16" stroke="#5d3213" strokeWidth="1" opacity=".3" />
          </pattern>
        </defs>

        <path
          className="rope"
          d="M-10,23 C85,5 156,6 230,18 C318,32 397,32 492,17 C565,6 618,9 660,22"
          fill="none"
          stroke="url(#ropeGrad)"
          strokeWidth="3.4"
          strokeLinecap="round"
        />

        <path
          d="M-10,20 C85,3 156,4 230,15 C318,29 397,29 492,14 C565,3 618,6 660,19"
          fill="none"
          stroke="#e0b072"
          strokeWidth="1"
          strokeLinecap="round"
          opacity=".55"
        />

        {flags.map((flag, index) => {
          const x1 = flag.x;
          const y1 = flag.y;
          const x2 = x1 + width;
          const y2 = y1 + height;
          const xm = x1 + width / 2;

          const points = `
            ${x1},${y1}
            ${x2},${y1}
            ${x2 - 2},${y2 - 1}
            ${xm},${y2 - notchDepth}
            ${x1 + 2},${y2 - 1}
          `;

          return (
            <g
              key={index}
              className="junina-flag"
              style={
                {
                  animationDelay: `${index * 0.16}s`,
                  "--rotate": `${flag.rotate}deg`,
                  "--scale": flag.scale,
                } as React.CSSProperties
              }
            >
              <line
                x1={xm}
                y1={y1 - 8}
                x2={xm}
                y2={y1 + 2}
                stroke="#70411f"
                strokeWidth="2"
                strokeLinecap="round"
              />

              <circle
                className="tiny-knot"
                cx={xm}
                cy={y1 - 5}
                r="3"
                fill="#8a5428"
              />

              <polygon
                points={points}
                fill={flag.fill}
                stroke={flag.stroke}
                strokeWidth="1.35"
                strokeLinejoin="round"
              />

              <polygon
                className="paper-light"
                points={`${x1 + 3},${y1 + 3} ${x2 - 4},${y1 + 3} ${xm},${y1 + 18}`}
                fill="#fff"
              />

              <polygon
                className="paper-shadow"
                points={`${x2 - 13},${y1 + 4} ${x2 - 2},${y1 + 4} ${x2 - 2},${y2 - 4} ${xm},${y2 - notchDepth}`}
                fill="#000"
              />

              <path
                d={`M${x1 + 5},${y1 + 8} C${xm - 5},${y1 + 13} ${xm + 5},${y1 + 13} ${x2 - 5},${y1 + 8}`}
                fill="none"
                stroke="#ffffff"
                strokeWidth="1"
                opacity=".25"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}