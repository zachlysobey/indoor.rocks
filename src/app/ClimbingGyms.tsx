import { formatAddress } from './address'
import { ClimbingGym } from './dataModel'

const mapsUrl = (gym: ClimbingGym): string =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${gym.name}, ${formatAddress(gym.address)}`)}`;

type Props = {
  dataPromise: Promise<ClimbingGym[]>
};

export const ClimbingGyms = async ({ dataPromise }: Props) => {
  return (await dataPromise).map(gym => (
    <article key={gym.name}>
      <h3>{gym.name}</h3>
      <address>{formatAddress(gym.address)}</address>
      <p>{gym.description}</p>
      <ul>
        {gym.amenities.map(a => <li key={a.name}>{a.name}</li>)}
      </ul>
      <footer>
        <a href={mapsUrl(gym)}>Map ↗</a>
        {gym.website && <a href={gym.website}>Website ↗</a>}
      </footer>
    </article>
  ))
}
