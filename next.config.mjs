import path from "path";
import withPlaiceholder from "@plaiceholder/next";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        pathname: "/upload/**",
      },
      {
        protocol: "https",
        hostname: "moreporfavor-images.s3.eu-central-1.amazonaws.com",
        pathname: "/**",
      },
    ],
  },
};

export default withPlaiceholder(nextConfig);
