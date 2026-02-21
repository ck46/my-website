/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.ocw-openmatters.org",
      },
    ],
  },
};

export default nextConfig;
