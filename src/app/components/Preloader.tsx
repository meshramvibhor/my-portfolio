"use client";

import { useEffect, useState } from "react";

const BOOT_LINES = [
  "INITIALIZING NEURAL INTERFACE",
  "CALIBRATING HOLOGRAPHIC GRID",
  "LOADING PARTICLE SYSTEMS",
  "SYNCING DIGITAL UNIVERSE",
];

export const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const start = performance.now();
    const duration = 2600;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      setLineIndex(Math.min(BOOT_LINES.length - 1, Math.floor(eased * BOOT_LINES.length)));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setFading(true), 350);
        setTimeout(() => {
          setDone(true);
          document.body.style.overflow = "";
        }, 1100);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
    };
  }, []);

  if (done) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#03040a]"
      style={{
        transition: "opacity 0.7s ease, transform 0.7s ease, filter 0.7s ease",
        opacity: fading ? 0 : 1,
        transform: fading ? "scale(1.06)" : "scale(1)",
        filter: fading ? "blur(8px)" : "blur(0px)",
        pointerEvents: fading ? "none" : "auto",
      }}
    >
      <div className="relative mb-12 h-44 w-44">
        <div className="absolute inset-0 rounded-full border border-cyan-400/30 spin-slow" />
        <div
          className="absolute inset-2 rounded-full border-2 border-transparent"
          style={{
            borderTopColor: "rgba(34,211,238,0.9)",
            borderRightColor: "rgba(168,85,247,0.6)",
            animation: "spinSlow 2s linear infinite",
          }}
        />
        <div
          className="absolute inset-6 rounded-full border border-transparent"
          style={{
            borderBottomColor: "rgba(217,70,239,0.8)",
            animation: "spinSlow 3s linear infinite reverse",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-3xl font-bold gradient-text neon-text">
            {progress}
            <span className="align-top text-base">%</span>
          </span>
        </div>
      </div>

      <div className="section-kicker mb-6 text-cyan-300/90">{BOOT_LINES[lineIndex]}</div>

      <div className="h-[3px] w-64 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-400"
          style={{ width: `${progress}%`, transition: "width 0.1s linear" }}
        />
      </div>

      <p className="mt-5 font-display text-[0.65rem] tracking-[0.5em] text-slate-500">
        VIBHOR MESHRAM // OS
      </p>
    </div>
  );
};
