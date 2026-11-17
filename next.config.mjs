import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

/** @type {(phase: string) => import('next').NextConfig} */
const nextConfig = phase => ({
  output: "export",
  // Emit map/index.html rather than map.html: the bucket only serves directory indexes.
  trailingSlash: true,
  // Give `next dev` its own directory, so running `next build` while the dev server is up can't
  // pull its files out from under it (it serves 500s until restarted). It has to be this way
  // round: with output: "export", Next 14's build ignores distDir and always uses .next.
  ...(phase === PHASE_DEVELOPMENT_SERVER && { distDir: ".next-dev" }),
});

export default nextConfig;
