import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "avatars.mds.yandex.net",
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default nextConfig;
