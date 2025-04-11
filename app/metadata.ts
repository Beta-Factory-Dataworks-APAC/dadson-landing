import { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://dadson.com';

export const siteConfig = {
  name: 'Dadson',
  description: 'Premium home solutions tailored to your needs.',
  url: baseUrl,
  ogImage: `${baseUrl}/og.jpg`,
};

export const defaultMetadata: Metadata = {
  title: {
    default: `${siteConfig.name} - Premium Home Solutions`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'home solutions',
    'renovation',
    'home improvement',
    'interior design',
    'custom furniture',
    'home renovation',
    'luxury home',
    'premium home services',
  ],
  authors: [
    {
      name: 'Dadson',
      url: siteConfig.url,
    },
  ],
  creator: 'Dadson',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@dadsonhomes',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}; 