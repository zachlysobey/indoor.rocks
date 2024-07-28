import Image from "next/image";
import styles from "./page.module.css";

import { getData } from "./main";
import { ClimbingGym } from "./dataModel";

export default function Home() {
  const data = getData();
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

      <h2>Climbing Gyms in New York City (NYC)</h2>

      {
        data.climbingGyms.map(( gym ) => (
          <article key={gym.name} className={styles.gymCard}>
            <h3>{gym.name}</h3>
            <p>{gym.description}</p>
            <table>
              {
                Object.keys(gym).map((propName) => (
                  <tr key={propName}>
                    <td>{propName}</td>
                    <td>{JSON.stringify(gym[propName as keyof ClimbingGym])}</td>
                  </tr>
                ))
              }
              
            </table>
          </article>
        ))
      }
      
      <div>
        <code className={styles.code}><pre>{JSON.stringify(data.climbingGyms, null, 4)}</pre></code>
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
