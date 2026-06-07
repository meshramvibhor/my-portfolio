"use client";

import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./Scene"), {
  ssr: false,
  loading: () => (
    <div className="scene-canvas" style={{ background: "#03040a" }} />
  ),
});

export default function SceneBackground() {
  return <Scene />;
}
