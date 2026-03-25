import { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/a-propos',
    '/services',
    '/portfolio',
    '/blog',
    '/contact',
    '/mentions-legales',
    '/b2b',
  ].map((route) => ({
    url: `${SITE_CONFIG.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}
