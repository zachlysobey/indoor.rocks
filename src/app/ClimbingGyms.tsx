import { Address, ClimbingGym } from './dataModel'

const formatAddress = (a: Address): string =>
  `${a.streetNumber} ${a.streetName}, ${a.city}, ${a.state} ${a.postalCode}`;

type Props = {
  dataPromise: Promise<ClimbingGym[]>
};

export const ClimbingGyms = async ({ dataPromise }: Props) => {
  return (await dataPromise).map(gym => (
    <article key={gym.name}>
      <h3>{gym.name}</h3>
      <p>{gym.description}</p>
      <table>
        <tbody>
          <tr>
            <td>Address:</td>
            <td>{formatAddress(gym.address)}</td>
          </tr>
          <tr>
            <td>Amenities:</td>
            <td>{gym.amenities.map(a => a.name).join(', ')}</td>
          </tr>
        </tbody>
      </table>
    </article>
  ))
}
