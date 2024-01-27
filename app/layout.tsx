import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AuthProvider from '@/components/providers/AuthProvider'
import TrpcProvider from '@/components/providers/TrpcProviders'
import Footer from '@/components/footer/Footer'
import ToastProvider from '@/components/providers/ToastProviders'
import Navigation from '@/components/auth/Navigation'
import { getAuthSession } from '@/lib/nextauth'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'hirano risa',
  description: 'hirano risa net',
}
interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({children}:RootLayoutProps) {
  const user = await getAuthSession()

  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className='flex flex-col min-h-screen'>
          <AuthProvider>
            <TrpcProvider>
              <Navigation user={user} />
              <ToastProvider />
              <div className='flex-grow'>
                {children}
              </div>
              <div className='flex flex-col-reverse'>
                <Footer />
              </div>
            </TrpcProvider>
          </AuthProvider>
        </div>
      </body>
    </html>
  )
}
