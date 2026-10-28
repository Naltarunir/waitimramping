"use client";
import Tiling from "./Tiling";

// one fixed background, so the page never swaps patterns between loads
export default function ClientTilingBackground() {
  return <Tiling patternSrc="/tile_transparent.png" />;
}
