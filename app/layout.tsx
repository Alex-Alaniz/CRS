import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space'
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: 'CRS | Controlled Risk Services',
  description: 'Construction safety and risk management consultants. Protecting people. Powering projects. Expert safety governance for construction and industrial operations.',
  keywords: ['construction safety', 'risk management', 'safety consultants', 'OSHA compliance', 'safety audits', 'Houston safety'],
  authors: [{ name: 'Controlled Risk Services' }],
  openGraph: {
    title: 'CRS | Controlled Risk Services',
    description: 'Protecting People. Powering Projects. Expert safety governance and risk management for construction and industrial projects.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f1419',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
