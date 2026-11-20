import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	// Static export: the site is served as plain files from Cloudflare Pages
	output: 'export',
	images: {
		unoptimized: true
	}
}

export default nextConfig
