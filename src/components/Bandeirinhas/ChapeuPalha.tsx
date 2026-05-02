// components/ChapeuPalha.tsx

export default function ChapeuPalha() {
  return (
    <div className="w-full max-w-[720px]">
      <svg
        viewBox="0 0 640 260"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Chapéu de palha"
      >
        <defs>
          <linearGradient id="hatBrim" x1="0" y1="40" x2="0" y2="230">
            <stop offset="0%" stopColor="#ffd36b" />
            <stop offset="45%" stopColor="#eda23d" />
            <stop offset="100%" stopColor="#b76422" />
          </linearGradient>

          <linearGradient id="hatCrown" x1="0" y1="20" x2="0" y2="125">
            <stop offset="0%" stopColor="#f8bd5a" />
            <stop offset="55%" stopColor="#d9842f" />
            <stop offset="100%" stopColor="#a85b20" />
          </linearGradient>

          <linearGradient id="underBrim" x1="0" y1="120" x2="0" y2="225">
            <stop offset="0%" stopColor="#9b4e1d" />
            <stop offset="100%" stopColor="#d8862e" />
          </linearGradient>

          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="160%">
            <feDropShadow
              dx="0"
              dy="5"
              stdDeviation="4"
              floodColor="#5e2d12"
              floodOpacity="0.28"
            />
          </filter>

          <clipPath id="brimClip">
            <path d="M38 144C95 96 202 58 337 55C472 52 587 80 611 126C622 148 604 176 563 197C500 230 390 241 265 234C145 227 55 194 38 144Z" />
          </clipPath>
        </defs>

        {/* palhas externas esquerda */}
        <g
          fill="none"
          stroke="#e6a13d"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.9"
        >
          <path d="M80 139C44 123 26 119 4 122" />
          <path d="M89 126C52 103 30 94 10 91" />
          <path d="M108 113C78 80 60 59 39 45" />
          <path d="M121 107C96 74 83 53 76 32" />
          <path d="M92 157C55 160 27 170 2 190" />
          <path d="M82 174C51 185 30 205 12 231" />
          <path d="M127 205C107 226 86 245 67 253" />
          <path d="M158 217C147 235 133 247 115 255" />
        </g>

        {/* palhas externas direita */}
        <g
          fill="none"
          stroke="#e6a13d"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.9"
        >
          <path d="M521 82C538 48 554 30 572 18" />
          <path d="M548 88C575 51 598 29 624 13" />
          <path d="M572 100C604 75 621 63 637 59" />
          <path d="M582 121C612 112 629 113 640 116" />
          <path d="M573 158C609 165 626 178 638 196" />
          <path d="M544 185C574 199 587 213 593 229" />
          <path d="M510 207C526 221 536 233 540 246" />
        </g>

        {/* copa */}
        <path
          d="M229 93C231 52 259 28 331 25C398 22 432 43 448 93C389 84 302 83 229 93Z"
          fill="url(#hatCrown)"
          stroke="#b96a25"
          strokeWidth="3"
          filter="url(#softShadow)"
        />

        <path
          d="M246 80C294 63 378 56 423 71"
          fill="none"
          stroke="#f6c069"
          strokeWidth="7"
          strokeLinecap="round"
          opacity="0.35"
        />

        <path
          d="M365 35C390 31 415 34 426 45"
          fill="none"
          stroke="#ffe19a"
          strokeWidth="10"
          strokeLinecap="round"
          opacity="0.42"
        />

        {/* aba principal */}
        <path
          d="M38 144C95 96 202 58 337 55C472 52 587 80 611 126C622 148 604 176 563 197C500 230 390 241 265 234C145 227 55 194 38 144Z"
          fill="url(#hatBrim)"
          stroke="#b86b24"
          strokeWidth="4"
          filter="url(#softShadow)"
        />

        {/* parte inferior escura */}
        <path
          d="M86 178C174 202 302 202 425 177C485 164 536 148 581 130C558 177 470 217 332 226C205 234 108 216 62 177C70 176 78 176 86 178Z"
          fill="url(#underBrim)"
          opacity="0.72"
        />

        <path
          d="M88 178C185 202 330 197 455 168"
          fill="none"
          stroke="#6f3512"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.55"
        />

        {/* textura interna */}
        <g clipPath="url(#brimClip)" opacity="0.22">
          {[
            "M70 150C126 115 245 87 378 83C482 80 558 98 608 126",
            "M70 165C154 126 270 105 410 103C499 102 565 116 612 139",
            "M83 191C179 157 302 139 435 137C510 136 570 145 617 162",
            "M112 211C207 187 327 174 455 173C500 173 543 176 581 183",
          ].map((d, i) => (
            <path
              key={i}
              d={d}
              fill="none"
              stroke="#7b3b15"
              strokeWidth="5"
              strokeLinecap="round"
            />
          ))}
        </g>

        {/* ondas principais */}
        <g
          fill="none"
          stroke="#9f571d"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.72"
          clipPath="url(#brimClip)"
        >
          <path d="M70 151C91 133 101 166 121 148C141 130 152 163 172 145C192 127 204 160 225 142C245 124 257 156 278 139C299 122 312 153 334 136C356 119 370 150 392 133C414 116 428 148 450 130C472 112 488 144 510 127C531 111 546 139 566 125" />

          <path d="M92 182C113 164 124 196 144 178C164 160 176 191 196 174C216 157 229 188 250 171C271 154 284 184 306 167C328 150 342 181 364 164C386 147 401 177 424 160C447 143 462 174 485 158C508 142 521 169 543 156" />

          <path d="M132 211C155 195 168 222 190 207C212 192 226 219 249 204C272 189 287 216 310 201C333 186 349 212 372 198C395 184 410 209 433 196" />
        </g>

        {/* ondas claras */}
        <g
          fill="none"
          stroke="#f8c867"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.45"
          clipPath="url(#brimClip)"
        >
          <path d="M85 122C174 87 285 73 394 78C490 82 561 101 600 126" />
          <path d="M104 163C194 137 302 126 425 127C496 128 550 137 596 154" />
          <path d="M120 199C214 181 315 171 437 171C493 171 540 176 580 188" />
        </g>

        {/* pequenos riscos de palha */}
        <g
          fill="none"
          stroke="#7f3f17"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.22"
          clipPath="url(#brimClip)"
        >
          <path d="M111 133L139 120" />
          <path d="M154 109L184 101" />
          <path d="M210 91L247 84" />
          <path d="M305 79L349 76" />
          <path d="M445 86L479 92" />
          <path d="M529 111L566 126" />
          <path d="M100 187L138 199" />
          <path d="M189 209L239 215" />
          <path d="M341 216L392 211" />
          <path d="M460 197L506 184" />
          <path d="M267 133L306 127" />
          <path d="M370 115L413 115" />
        </g>

        {/* brilho superior */}
        <path
          d="M112 123C211 85 357 72 500 86C548 91 583 104 604 124"
          fill="none"
          stroke="#ffd982"
          strokeWidth="12"
          strokeLinecap="round"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}