import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "api.microlink.io",
      "images.unsplash.com", // Microlink Image Preview
    ],
  },
};

export default nextConfig;
