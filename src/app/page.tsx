import { Suspense } from "react";
import { ClimbingGyms } from "./ClimbingGyms";
import { getData } from "./getData";
import { getUserData } from '@/actions/todoActions';
import styles from "./page.module.css";

const delay = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));

const DataRenderer = async ({ dataPromise }: { dataPromise: Promise<object>}) => {
  const data = await dataPromise;
  return <>{JSON.stringify(data, null, 2)}</>
}

export default function Home() {
  const dataPromise = delay(1000).then(getData);
  const nyGymPromise = dataPromise.then(d => d.climbingGyms.filter(g => g.address.state === "NY"))
  const ctGymPromise = dataPromise.then(d => d.climbingGyms.filter(g => g.address.state === "CT"))
  ctGymPromise.then(g => console.log('ct', g))

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

      <div>
        {<DataRenderer dataPromise={getUserData()} />}
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

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
