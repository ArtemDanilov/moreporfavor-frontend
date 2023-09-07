import path from "path";
import withPlaiceholder from "@plaiceholder/next";
import withMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */

const mdx = withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
});

const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  // output: "export",
};

export default mdx(withPlaiceholder(nextConfig));
