import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-display' });
const _dmSans = DM_Sans({ subsets: ["latin"], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'De Inspired Youth Foundation',
  description: 'Igniting the Spark of Potential in Nigerian Youth - Education, Leadership, Innovation & Community Development',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_playfair.variable} ${_dmSans.variable}`} suppressHydrationWarning>
      <body className="font-body antialiased" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
