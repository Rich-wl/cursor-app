import type { MetadataRoute } from 'next'
import { getAllVersions } from '@/lib/versions'

export const dynamic = 'force-static'

const domain = 'https://es.cursorhistory.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const versions = await getAllVersions()
	const lastModified = new Date().toISOString().split('T')[0]

	return [
		{ url: `${domain}/`, lastModified, changeFrequency: 'weekly', priority: 1.0 },
		{ url: `${domain}/versions`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
		...versions.map((version, index) => ({
			url: `${domain}/versions/${version.version}`,
			lastModified,
			changeFrequency: 'monthly' as const,
			priority: index === 0 ? 0.9 : 0.7
		}))
	]
}
