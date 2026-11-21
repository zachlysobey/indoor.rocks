import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getData } from "../../getData";
import { gymBySlug } from "../../gymBySlug";
import { gymSlug } from "../../gymSlug";
import { CollapseLink } from "../../climbing-gyms/CollapseLink";
import { GymDetails } from "../../climbing-gyms/GymDetails";
import { GymMorph } from "../../climbing-gyms/GymMorph";
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

// A gym's own page: its card from the list, grown to fill the page (and animated that way, from the
// expand link).
export default async function GymPage(props: Props) {
  const { gym, slug } = await findGym(props);

  return (
    <GymMorph.Page>
      <main className={styles.content}>
        <GymMorph.Card slug={slug}>
          <article className={styles.card}>
            <header>
              <h2>
                <GymMorph.Name slug={slug}>{gym.name}</GymMorph.Name>
              </h2>
              <CollapseLink slug={slug} className={styles.collapse} />
            </header>
            <GymDetails gym={gym} className={styles.details} />
          </article>
        </GymMorph.Card>
      </main>
    </GymMorph.Page>
  );
}
