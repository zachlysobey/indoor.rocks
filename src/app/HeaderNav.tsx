"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./HeaderNav.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/climbing-gyms", label: "Gyms" },
];

/* Muted links, with the current section in full text color and an accent underline. */
export default function HeaderNav() {
  // trailingSlash is on, so paths arrive as /climbing-gyms/.
  const pathname = usePathname().replace(/(.)\/$/, "$1");
  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav className={styles.nav}>
      {links.map(({ href, label }) => (
        <Link key={href} href={href} aria-current={isCurrent(href) ? "page" : undefined}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
