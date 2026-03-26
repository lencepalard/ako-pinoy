import type { Metadata } from 'next'
import { Nunito, Plus_Jakarta_Sans, Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Ako Pinoy — Learn Filipino Culture & Tagalog',
    template: '%s | Ako Pinoy',
  },
  description:
    'Immerse yourself in Filipino culture and learn Tagalog through real-life scenarios, quizzes, and AI-powered guidance. Become truly Pinoy.',
  keywords: ['learn tagalog', 'filipino culture', 'tagalog for beginners', 'filipino language', 'ako pinoy'],
  openGraph: {
    title: 'Ako Pinoy — Learn Filipino Culture & Tagalog',
    description: 'Immerse yourself in Filipino culture and learn Tagalog.',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${nunito.variable} ${plusJakartaSans.variable} ${inter.variable}`}
    >
      <body>
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  )
}
