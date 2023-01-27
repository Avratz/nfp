import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'

import '@/styles/reset.css'
import '@/styles/variables.css'
import '@/styles/globals.css'
import { DM_Sans, Poppins } from '@next/font/google'
import { cx } from 'class-variance-authority'
import PWA from '@/components/PWA/PWA'

const dmSans = DM_Sans({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-dmSans',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={cx(dmSans.variable, poppins.variable)}>
        <Header />
        {children}
        <Footer />
        <div id="modal"></div>
      </body>
      {process.env.NODE_ENV === 'production' ? <PWA /> : null}
    </html>
  )
}
