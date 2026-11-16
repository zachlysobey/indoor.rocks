import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "indoor.rocks",
  description: "indoor rock climbing gym guidebook",
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
            <h1>indoor.rocks</h1>
            <p>
              indoor rock climbing gym guidebook
            </p>
            <nav>
              <Link href="/">List</Link>
              <Link href="/map">Map</Link>
            </nav>
            <div>
              By: <a href="https://zach.lysobey.com/">Zach Lysobey</a>
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
