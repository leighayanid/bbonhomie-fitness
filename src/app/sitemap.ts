import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://bbonhomie.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://bbonhomie.com/#the-pedigree',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
        url: 'https://bbonhomie.com/#the-blueprint',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: 'https://bbonhomie.com/#the-wall',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
  ]
}
