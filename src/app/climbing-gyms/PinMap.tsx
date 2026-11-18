"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import styles from "./PinMap.module.css";

export type Pin = {
  id: string;
  lat: number;
  lng: number;
  title: string;
};

type Props = {
  pins: Pin[];
  selected?: string;
  hovered?: string;
  onSelect: (id: string) => void;
  className?: string;
};

// Leaflet is loaded from a CDN, not npm, so it is an untyped global. This file is the only one
// that knows Leaflet exists.
declare const L: any;

const LEAFLET = "https://unpkg.com/leaflet@1.9.4/dist/leaflet";
const TILES = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
const ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const RADIUS = 7;
const SELECTED_RADIUS = 11;
const PADDING = [24, 24];
// How far in from the map's edges a pin must be to count as in view (a fraction of the view).
// A pin hard against the edge would have its name cut off.
const EDGE = 0.1;

type Drawn = {
  map: any;
  markers: Map<string, any>;
  remove: () => void;
};

// Built as a DOM node rather than an HTML string, so pin text is never parsed as markup.
function label(text: string): HTMLElement {
  const span = document.createElement("span");
  span.textContent = text;
  return span;
}

function draw(container: HTMLElement, pins: Pin[], onSelect: (id: string) => void): Drawn {
  const map = L.map(container);
  L.tileLayer(TILES, { attribution: ATTRIBUTION }).addTo(map);

  const markers = new Map<string, any>(
    pins.map(pin => [
      pin.id,
      L.circleMarker([pin.lat, pin.lng], { className: styles.pin, radius: RADIUS })
        .bindTooltip(label(pin.title))
        .on("click", () => onSelect(pin.id)),
    ]),
  );
  const bounds = L.featureGroup([...markers.values()]).addTo(map).getBounds();
  map.fitBounds(bounds, { padding: PADDING });

  // The map sits in a grid that changes shape with the viewport; Leaflet has to be told.
  const resize = new ResizeObserver(() => map.invalidateSize());
  resize.observe(container);

  return {
    map,
    markers,
    remove() {
      resize.disconnect();
      map.remove();
    },
  };
}

// Center a pin if it's out of view (or nearly). Never zooms: the reader chose the zoom.
function panIntoView({ map, markers }: Drawn, id: string) {
  const at = markers.get(id)?.getLatLng();
  if (at && !map.getBounds().pad(-EDGE).contains(at)) map.panTo(at);
}

// A permanent tooltip stays open without hovering, so the selected pin's name is always showing.
// Leaflet can't change that option on a bound tooltip, so it is re-bound.
function pinTooltip(marker: any, permanent: boolean) {
  const tooltip = marker.getTooltip();
  if (tooltip.options.permanent === permanent) return;
  marker.unbindTooltip().bindTooltip(tooltip.getContent(), { permanent });
}

function highlight({ markers }: Drawn, selected: string | undefined) {
  for (const [id, marker] of markers) {
    const on = id === selected;
    marker.setRadius(on ? SELECTED_RADIUS : RADIUS);
    marker.getElement()?.classList.toggle(styles.selected, on);
    pinTooltip(marker, on);
    if (on) marker.bringToFront();
  }
}

export function PinMap({ pins, selected, hovered, onSelect, className }: Props) {
  const container = useRef<HTMLDivElement>(null);
  const drawn = useRef<Drawn | null>(null);
  const [leafletReady, setLeafletReady] = useState(false);

  // Read when the map is (re)drawn, so the selection effect below doesn't have to redraw it.
  const selectedRef = useRef(selected);
  useEffect(() => {
    selectedRef.current = selected;
  });

  // A pin clicked on the map is already in view, so selecting it never moves the map. Only a
  // selection made elsewhere (the list, Back) pans to the pin.
  const pickedOnMap = useRef<string | undefined>(undefined);

  useEffect(() => {
    if (!leafletReady || !container.current) return;

    const current = draw(container.current, pins, id => {
      pickedOnMap.current = id;
      onSelect(id);
    });
    highlight(current, selectedRef.current);
    drawn.current = current;
    return () => {
      current.remove();
      drawn.current = null;
    };
  }, [leafletReady, pins, onSelect]);

  useEffect(() => {
    if (!drawn.current) return;
    if (selected && selected !== pickedOnMap.current) panIntoView(drawn.current, selected);
    pickedOnMap.current = undefined;
    highlight(drawn.current, selected);
  }, [selected]);

  // Show the name of a pin hovered elsewhere (the list), as hovering the pin itself would. The
  // selected pin's name is permanent, so it stays open.
  useEffect(() => {
    const marker = hovered ? drawn.current?.markers.get(hovered) : undefined;
    marker?.openTooltip();
    return () => {
      if (!marker?.getTooltip()?.options.permanent) marker?.closeTooltip();
    };
  }, [hovered]);

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
      <div ref={container} className={`${styles.map} ${className ?? ""}`} />
    </>
  );
}
