import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'

import '@/styles/reset.css'
import '@/styles/variables.css'
import '@/styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
