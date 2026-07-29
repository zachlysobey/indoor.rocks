import { Suspense } from "react";
import { ClimbingGyms } from "./ClimbingGyms";
import { getData } from "./getData";
import styles from "./page.module.css";

const delay = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));

export default function Home() {
  const dataPromise = delay(1000).then(getData);
  const nyGymPromise = dataPromise.then(d => d.climbingGyms.filter(g => g.address.state === "NY"))
  const ctGymPromise = dataPromise.then(d => d.climbingGyms.filter(g => g.address.state === "CT"))

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>indoor.rocks</h1>
        <p>
          indoor rock climbing gym guidebook
        </p>
        <div>
          By: <a href="https://zach.lysobey.com/">Zach Lysobey</a>
        </div>
      </div>

      <div className={styles.content}>
        <h2>Climbing Gyms in New York (NY)</h2>
        <Suspense fallback={(<p>Loading...</p>)}>
          <ClimbingGyms dataPromise={nyGymPromise} />
        </Suspense>

        <h2>Climbing Gyms in Connecticut (CT)</h2>
        <Suspense fallback={(<p>Loading...</p>)}>
          <ClimbingGyms dataPromise={ctGymPromise} />
        </Suspense>
      </div>
    </main>
  );
}
