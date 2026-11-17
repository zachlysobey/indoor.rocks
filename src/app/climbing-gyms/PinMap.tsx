"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import styles from "./PinMap.module.css";

export type Pin = {
  lat: number;
  lng: number;
  title: string;
  detail?: string;
  href?: string;
};

// Leaflet is loaded from a CDN, not npm, so it is an untyped global. This file is the only one
// that knows Leaflet exists.
declare const L: any;

const LEAFLET = "https://unpkg.com/leaflet@1.9.4/dist/leaflet";
const TILES = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
const ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

// Built as DOM nodes rather than an HTML string, so pin text is never parsed as markup.
function popup({ title, detail = "", href }: Pin): HTMLElement {
  const heading = document.createElement("a");
  heading.textContent = title;
  if (href) heading.href = href;

  const content = document.createElement("div");
  content.append(heading, document.createElement("br"), detail);
  return content;
}

function draw(container: HTMLElement, pins: Pin[]) {
  const map = L.map(container);
  L.tileLayer(TILES, { attribution: ATTRIBUTION }).addTo(map);

  const markers = pins.map(pin =>
    L.circleMarker([pin.lat, pin.lng], { className: styles.pin, radius: 7 }).bindPopup(popup(pin)),
  );
  map.fitBounds(L.featureGroup(markers).addTo(map).getBounds(), { padding: [24, 24] });

  return map;
}

export function PinMap({ pins }: { pins: Pin[] }) {
  const container = useRef<HTMLDivElement>(null);
  const [leafletReady, setLeafletReady] = useState(false);

  useEffect(() => {
    if (!leafletReady || !container.current) return;

    const map = draw(container.current, pins);
    return () => {
      map.remove();
    };
  }, [leafletReady, pins]);

  return (
    <>
      <link
        rel="stylesheet"
        href={`${LEAFLET}.css`}
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin="anonymous"
      />
      <Script
        src={`${LEAFLET}.js`}
        integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
        crossOrigin="anonymous"
        onReady={() => setLeafletReady(true)}
      />
      <div ref={container} className={styles.map} />
    </>
  );
}
