import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://repuestosvalentino.maat.work'),
  title: 'Valentino Repuestos | Autopartes, Baterías, Frenos, Embragues - Fernández Oro, Cipolletti, Neuquén',
  description: 'Valentino Repuestos en General Fernández Oro. Repuestos del automotor: baterías, frenos, embragues, lubricantes, rodamientos, rulemanes y retenes. WhatsApp: 299 471-9426.',
  keywords: ['autopartes', 'repuestos', 'baterías', 'frenos', 'embragues', 'lubricantes', 'rodamientos', 'Fernández Oro', 'Cipolletti', 'Neuquén', 'Alto Valle'],
  authors: [{ name: 'Valentino Repuestos' }],
  creator: 'Valentino Repuestos',
  publisher: 'Valentino Repuestos',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://repuestosvalentino.maat.work',
    title: 'Valentino Repuestos | Repuestos del automotor en Fernández Oro',
    description: 'Baterías, frenos, embragues, lubricantes, rodamientos, rulemanes y retenes. Consultas por WhatsApp.',
    siteName: 'Valentino Repuestos',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Valentino Repuestos - Autopartes en Fernández Oro',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Valentino Repuestos',
    description: 'Repuestos del automotor en Fernández Oro. Consultas por WhatsApp.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export const viewport: Viewport = {
  themeColor: '#C41E3A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}