"use client";

import { WithFocus } from "../focus";
import { GymGroups, type GymGroup } from "../GymGroups";
import { gymRoutes } from "../gymRoutes";
import styles from "./page.module.css";

// The chains, each a box of its collapsed gyms, as many across as fit. A gym in ?focus= opens as its
// card, as on the map.
export function ChainList({ groups }: { groups: GymGroup[] }) {
  return (
    <WithFocus>
      {selected => (
        <div className={styles.chains}>
          <GymGroups groups={groups} selected={selected} route={gymRoutes.chains} level={3} />
        </div>
      )}
    </WithFocus>
  );
}
