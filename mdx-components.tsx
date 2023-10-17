import type { MDXComponents } from "mdx/types";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory
import Link from "next/link";
import ImagesWithLighbox from "@/app/components/blocks/ImagesWithLighbox";
import MapLink from "@/app/components/blocks/mapLink/MapLink";

const components = {
  Link,
  ImagesWithLighbox,
  MapLink,
};

export const useMDXComponents = (components: MDXComponents): MDXComponents => {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    ...components,
  };
};

export default components;
