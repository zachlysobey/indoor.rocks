import { getData } from "./getData";
import styles from "./page.module.css";

const delay = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));

export const ClimbingGyms = async () => {
  // TODO: remove fake wait
  const data = await delay(1000).then(getData);
  return data.climbingGyms.map(( gym ) => (
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
