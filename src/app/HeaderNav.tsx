"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./HeaderNav.module.css";

// `sections` are the paths a link is current for: its own, and any others that belong to it (a
// gym's page, under /climbing-gym/, is still Gyms).
const links = [
  { href: "/", label: "Home", sections: [] },
  { href: "/climbing-gyms", label: "Gyms", sections: ["/climbing-gym"] },
  { href: "/home-walls", label: "Home walls", sections: [] },
];

/* Muted links, with the current section in full text color and an accent underline. */
export default function HeaderNav() {
  // trailingSlash is on, so paths arrive as /climbing-gyms/.
  const pathname = usePathname().replace(/(.)\/$/, "$1");
  const isUnder = (path: string) => pathname === path || pathname.startsWith(`${path}/`);
  const isCurrent = (href: string, sections: string[]) =>
    href === "/" ? pathname === "/" : [href, ...sections].some(isUnder);

  return (
    <nav className={styles.nav}>
      {links.map(({ href, label, sections }) => (
        <Link key={href} href={href} aria-current={isCurrent(href, sections) ? "page" : undefined}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
