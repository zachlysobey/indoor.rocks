import { formatAddress } from "../address";
import type { ClimbingGym } from "../dataModel";
import styles from "./GymDetails.module.css";

const mapsUrl = (gym: ClimbingGym): string =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${gym.name}, ${formatAddress(gym.address)}`)}`;

const amenityLabels: Record<ClimbingGym["amenities"][number]["name"], string> = {
  "free-weights": "Free weights",
  machines: "Machines",
  bouldering: "Bouldering",
  "auto-belays": "Auto-belays",
  "top-rope": "Top rope",
  lead: "Lead climbing",
  sauna: "Sauna",
  yoga: "Yoga",
  "aerial-silks": "Aerial silks",
};

type Props = {
  gym: ClimbingGym;
  // Spacing around the details is up to wherever they're placed.
  className?: string;
};

// Everything about a gym but its name, which wherever it's shown already has as a heading.
export function GymDetails({ gym, className }: Props) {
  return (
    <div className={className ? `${styles.details} ${className}` : styles.details}>
      <address>{formatAddress(gym.address)}</address>
      {gym.description && <p>{gym.description}</p>}
      {gym.amenities.length > 0 && (
        <ul>
          {gym.amenities.map(a => <li key={a.name}>{amenityLabels[a.name]}</li>)}
        </ul>
      )}
      <footer>
        <a href={mapsUrl(gym)}>Google Maps ↗</a>
        {gym.website && <a href={gym.website}>Website ↗</a>}
      </footer>
    </div>
  );
}
