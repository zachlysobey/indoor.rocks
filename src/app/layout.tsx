import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
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
        <div className={styles.shell}>
          <header className={styles.header}>
            <hgroup>
              <h1>
                <Link href="/">indoor.rocks</Link>
              </h1>
              <p>indoor rock climbing guidebook</p>
            </hgroup>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/climbing-gyms">Gyms</Link>
            </nav>
          </header>
          {children}
          <footer className={styles.footer}>
            By: <a href="https://zach.lysobey.com/">Zach Lysobey</a>
          </footer>
        </div>
      </body>
    </html>
  );
}
