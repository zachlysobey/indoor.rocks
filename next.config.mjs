/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Emit map/index.html rather than map.html: the bucket only serves directory indexes.
  trailingSlash: true,
};

export default nextConfig;
