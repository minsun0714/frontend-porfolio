import type { NextConfig } from "next";
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const withMDX = createMDX({
	extension: /\.mdx?$/,
	options: {},
});

const nextConfig: NextConfig = {
	reactStrictMode: true,
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	images: {
		remotePatterns: [],
	},
};

export default withMDX(nextConfig);
