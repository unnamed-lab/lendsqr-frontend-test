import { MetadataRoute } from 'next'
import  appdata  from '@/utils/metadata';
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: appdata.title,
    short_name: appdata.short_name,
    description: appdata.desc,
    start_url: appdata.startUrl,
    display: 'standalone',
    background_color: appdata.backgroundColor,
    theme_color: appdata.themeColor,
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}