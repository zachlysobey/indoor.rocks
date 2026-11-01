/** @type {import('next').NextConfig} */
const nextConfig = {
  // Plain static files in out/, served from a GCS bucket (see plans/002).
  output: "export",
};

export default nextConfig;
