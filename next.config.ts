import type { NextConfig } from "next";

/**
 * `NEXT_PUBLIC_BASE_PATH` lets the same build serve from either
 * https://<user>.github.io/<repo>  (set it to "/<repo>")
 * or https://<user>.github.io      (leave it unset).
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
