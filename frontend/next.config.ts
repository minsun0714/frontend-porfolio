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
		domains: ["prod-files-secure.s3.us-west-2.amazonaws.com"]
	}
};

export default withMDX(nextConfig);
