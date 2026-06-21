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

export const metadata: Metadata = {
  title: 'CRS | Controlled Risk Services LLC',
  description: 'Integrity. Protection. Excellence. Construction safety and risk management consultants serving America.',
  keywords: ['construction safety', 'risk management', 'safety consultants', 'OSHA compliance', 'safety audits', 'Houston safety', 'American safety company'],
  authors: [{ name: 'Controlled Risk Services LLC' }],
  openGraph: {
    title: 'CRS | Controlled Risk Services LLC',
    description: 'Integrity. Protection. Excellence. Expert safety governance and risk management for construction and industrial projects.',
    type: 'website',
  },
  icons: {
    icon: '/crs-mark.jpg',
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
