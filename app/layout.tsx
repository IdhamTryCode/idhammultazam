import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono, Schibsted_Grotesk } from 'next/font/google'
import { site, siteUrl } from '@/lib/site'
import './globals.css'

const sans = Schibsted_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

/** Mirrors the toggle in components/ThemeToggle.tsx — keep the key in sync. */
const THEME_INIT = `(function(){var t;try{t=localStorage.getItem('ihm-theme')}catch(e){}if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.setAttribute('data-theme',t)})()`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: site.title,
  description: site.description,
  authors: [{ name: site.name, url: site.links.github }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    title: site.title,
    description: site.ogDescription,
    url: '/',
    siteName: site.name,
    locale: 'id_ID',
    images: [{ url: site.portrait, width: 896, height: 1200, alt: `Potret ${site.name}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.ogDescription,
    images: [site.portrait],
  },
  icons: {
    // the SVG swaps between the gold/ink and gold/white marks with the
    // browser's colour scheme; the PNG covers browsers without SVG favicons
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-48.png', type: 'image/png', sizes: '48x48' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
}

export const viewport: Viewport = {
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5F4F0' },
    { media: '(prefers-color-scheme: dark)', color: '#0F0F0E' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        {/*
          Resolves the colour scheme before first paint. Inline on purpose — an
          external file would be a render-blocking round trip, and anything
          deferred would let the wrong theme flash.
        */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
