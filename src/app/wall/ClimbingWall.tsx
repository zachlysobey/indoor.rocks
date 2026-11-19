"use client";

import { useSyncExternalStore } from "react";
import styles from "./ClimbingWall.module.css";
import type { Point } from "./geometry/Point";
import { wallLayout } from "./wallLayout";

// A new wall on every page load: laid out in the browser from a random seed, once, then kept for
// the life of the page (the layout doesn't remount on client-side navigation, so the wall stays put
// between pages). The server, and the first render while hydrating, draw no wall at all.
let cached: ReturnType<typeof wallLayout> | undefined;
const thisPagesWall = () => (cached ??= wallLayout(Math.floor(Math.random() * 2 ** 32)));
const noWall = () => undefined;
const neverChanges = () => () => {};

const svgPoints = (points: Point[]) =>
  points.map(({ x, y }) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");

/* Volumes and holds bolted to the background wall: a decorative layer behind the whole page. */
export default function ClimbingWall() {
  const wall = useSyncExternalStore(neverChanges, thisPagesWall, noWall);
  if (!wall) return null;

  return (
    <svg className={styles.wall} aria-hidden="true" focusable="false">
      <defs>
        <filter id="wall-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000" floodOpacity="0.2" />
        </filter>
        <radialGradient id="hold-shine" cx="0.35" cy="0.3" r="0.75">
          <stop offset="0" stopColor="#fff" stopOpacity="0.35" />
          <stop offset="0.6" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity="0.2" />
        </radialGradient>
      </defs>
      {wall.volumes.map((volume, i) => (
        <g key={`v${i}`} filter="url(#wall-shadow)">
          {volume.faces.map((face, j) => (
            <g key={j}>
              <polygon points={svgPoints(face.points)} className={styles.volume} />
              <polygon
                points={svgPoints(face.points)}
                className={face.light > 0 ? styles.lit : styles.shaded}
                fillOpacity={Math.abs(face.light).toFixed(2)}
              />
            </g>
          ))}
        </g>
      ))}
      {wall.holds.map((hold, i) => (
        <g
          key={`h${i}`}
          transform={`translate(${hold.at.x.toFixed(1)} ${hold.at.y.toFixed(1)}) rotate(${hold.rotation.toFixed(0)})`}
          filter="url(#wall-shadow)"
          style={{ "--hold-color": hold.color } as React.CSSProperties}
        >
          <path d={hold.path} className={styles.holdBody} />
          <path d={hold.path} fill="url(#hold-shine)" className={styles.holdShine} />
          <circle r="2.5" className={styles.bolt} />
        </g>
      ))}
    </svg>
  );
}
