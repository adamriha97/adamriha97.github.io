import { getPages } from '@/sanity/sanity-utils'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adam Next Web',
  description: 'Generated by create next app',
}

export const revalidate = 10;
export const dynamic = 'force-dynamic';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // get all of our pages
  const pages = await getPages();

  return (
    <html lang="en">
      <body className='bg-gray-300 max-w-3xl mx-auto py-10'>
        <header className='flex items-center justify-between'>
          <Link href="/" className='bg-gradient-to-r
          from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold'>ADAM</Link>
          <div className='flex items-center gap-5 text-sm text-gray-700 font-bold'>
            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`} className='hover:underline'>
                {page.title}
              </Link>
            ))}
          </div>
        </header>

        <main className="py-20">
          {children}
        </main>
      </body>
    </html>
  )
}
