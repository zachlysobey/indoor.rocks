import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import HeaderNav from "./HeaderNav";
import "./globals.css";
import styles from "./layout.module.css";
import { PopStateFirst } from "./PopStateFirst";
import { siteUrl } from "./siteUrl";
import ClimbingWall from "./wall/ClimbingWall";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "indoor.rocks",
  description: "indoor rock climbing guidebook",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PopStateFirst />
        <ClimbingWall />
        <div className={styles.shell}>
          <header className={styles.header}>
            <hgroup>
              <h1>
                <Link href="/">indoor.rocks</Link>
              </h1>
              <p>indoor rock climbing guidebook</p>
            </hgroup>
            <HeaderNav />
          </header>
          {children}
          <footer className={styles.footer}>
            By: <a href="https://zach.lysobey.com/">Zach Lysobey</a> ·{" "}
            <a href="https://github.com/zachlysobey/indoor.rocks">
              Source on GitHub
            </a>
          </footer>
        </div>
      </body>
    </html>
  );
}
