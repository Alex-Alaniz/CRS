import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
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

export const metadata: Metadata = {
  title: 'Controlled Risk Services | Construction Safety Consultants',
  description: 'CRS provides comprehensive safety solutions including safety program assessments, organizational audits, and incident investigations. Your trusted partner in construction safety and risk management.',
  keywords: ['construction safety', 'risk management', 'safety consultants', 'OSHA compliance', 'safety audits', 'Houston safety'],
  authors: [{ name: 'Controlled Risk Services' }],
  openGraph: {
    title: 'Controlled Risk Services | Construction Safety Consultants',
    description: 'Protecting People. Powering Projects. Expert safety governance and risk management for construction and industrial projects.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a2744',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
