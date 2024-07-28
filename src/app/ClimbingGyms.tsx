import { ClimbingGym } from './dataModel'
import styles from "./page.module.css";

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
            <td><code className={styles.code}><pre>{JSON.stringify(gym.address, null, 2)}</pre></code></td>
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
