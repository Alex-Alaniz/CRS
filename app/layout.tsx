import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-mono'
})

const siteUrl = new URL('https://controlled-risk-services.vercel.app')
const siteTitle = 'CRS | Controlled Risk Services LLC'
const siteDescription =
  'Construction safety, risk governance, and project controls support for industrial, infrastructure, and mission-critical work.'
const socialImageAlt = 'Controlled Risk Services LLC social preview'

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: 'Controlled Risk Services LLC',
  title: {
    default: siteTitle,
    template: '%s | Controlled Risk Services LLC',
  },
  description: siteDescription,
  keywords: ['construction safety', 'risk management', 'safety consultants', 'OSHA compliance', 'safety audits', 'Houston safety', 'project controls'],
  authors: [{ name: 'Controlled Risk Services LLC' }],
  creator: 'Controlled Risk Services LLC',
  publisher: 'Controlled Risk Services LLC',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: '/',
    siteName: 'Controlled Risk Services LLC',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: socialImageAlt,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: '/opengraph-image',
        alt: socialImageAlt,
      },
    ],
  },
  icons: {
    icon: '/crs-mark.jpg',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a1628',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
