/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bpy-demo.sgp1.digitaloceanspaces.com",
        pathname: "/**", // Allows all paths under this domain
      },
      {
        protocol: "https",
        hostname: "bpy-prod.sgp1.digitaloceanspaces.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
