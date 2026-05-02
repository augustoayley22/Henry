// components/EstrelasAnimadas/EstrelasAnimadas.tsx
"use client";
import { useEffect, useRef } from "react";

export default function EstrelasAnimadas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cores = ["#f5c842", "#f7d96e", "#fff0a0", "#e8b830", "#fce97a"];
    const estrelas: HTMLDivElement[] = [];

    for (let i = 0; i < 50; i++) {
      const el = document.createElement("div");
      const size = Math.random() * 5 + 2;
      const dur = (Math.random() * 2 + 1.2).toFixed(2);
      const delay = (Math.random() * 4).toFixed(2);
      const cor = cores[Math.floor(Math.random() * cores.length)];

      el.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: ${cor};
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        opacity: 0;
        animation: twinkle-convite ${dur}s ease-in-out infinite;
        animation-delay: ${delay}s;
        pointer-events: none;
      `;
      container.appendChild(el);
      estrelas.push(el);
    }

    return () => {
      estrelas.forEach((el) => el.remove());
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes twinkle-convite {
          0%   { opacity: 0; transform: scale(0.5); }
          50%  { opacity: 1; transform: scale(1.3); }
          100% { opacity: 0; transform: scale(0.5); }
        }
      `}</style>
      <div
        ref={containerRef}
        className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
      />
    </>
  );
}