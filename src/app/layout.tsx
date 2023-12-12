import Navbar from '@/components/Navbar'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'

import "react-loading-skeleton/dist/skeleton.css"
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PagePal.',
  description: 'AI PDF',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='light'>
      <Providers>
      <body className={cn('min-h-screen font-sans antialiased grainy', inter.className)}>
        <Toaster /> 
        <Navbar />
        {children}
      </body>
      </Providers>
    </html>
  )
}
