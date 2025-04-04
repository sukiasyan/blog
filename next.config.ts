import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
    remotePatterns: [
      {
         protocol: "https",
         hostname: "lh3.googleusercontent.com",
         port: "",
      },{
         protocol: "https",
         hostname: "test.com",
         port: "",
      },
    ],
 }
};

export default nextConfig;
