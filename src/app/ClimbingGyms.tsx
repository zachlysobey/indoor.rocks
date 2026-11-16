import { Address, ClimbingGym } from './dataModel'

const formatAddress = (a: Address): string =>
  `${a.streetNumber} ${a.streetName}, ${a.city}, ${a.state} ${a.postalCode}`;

const mapsUrl = (gym: ClimbingGym): string =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${gym.name}, ${formatAddress(gym.address)}`)}`;

type Props = {
  dataPromise: Promise<ClimbingGym[]>
};

export const ClimbingGyms = async ({ dataPromise }: Props) => {
  return (await dataPromise).map(gym => (
    <article key={gym.name}>
      <h3>{gym.name}</h3>
      <a href={mapsUrl(gym)}>{formatAddress(gym.address)}</a>
      <p>{gym.description}</p>
      <ul>
        {gym.amenities.map(a => <li key={a.name}>{a.name}</li>)}
      </ul>
    </article>
  ))
}
