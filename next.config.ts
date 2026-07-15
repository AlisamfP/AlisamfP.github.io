import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  sassOptions: {
    // Lets SCSS modules resolve `@use "mixins"` etc. from src/styles anywhere.
    loadPaths: [path.join(process.cwd(), "src", "styles")],
  },
};

export default nextConfig;
