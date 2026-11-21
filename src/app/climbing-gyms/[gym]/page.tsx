import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getData } from "../../getData";
import { gymBySlug } from "../../gymBySlug";
import { gymSlug } from "../../gymSlug";
import { CornerArrows } from "../CornerArrows";
import { GymDetails } from "../GymDetails";
import { gymRoutes } from "../gymRoutes";
import styles from "./page.module.css";

type Props = {
  params: Promise<{ gym: string }>;
};

// A static export: every gym's page is built, and any other slug is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return getData().climbingGyms.map(gym => ({ gym: gymSlug(gym) }));
}

async function findGym({ params }: Props) {
  const { gym: slug } = await params;
  const gym = gymBySlug(slug);
  if (!gym) notFound();
  return { gym, slug };
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { gym } = await findGym(props);
  return { title: `${gym.name} · indoor.rocks` };
}

// A gym's own page: its card from the list, grown to fill the page.
export default async function GymPage(props: Props) {
  const { gym, slug } = await findGym(props);

  return (
    <main className={styles.content}>
      <article className={styles.card}>
        <header>
          <h2>{gym.name}</h2>
          <Link
            href={gymRoutes.list(slug)}
            className={styles.collapse}
            aria-label="Back to the gym list"
            title="Back to the gym list"
          >
            <CornerArrows direction="in" />
          </Link>
        </header>
        <GymDetails gym={gym} className={styles.details} />
      </article>
    </main>
  );
}
