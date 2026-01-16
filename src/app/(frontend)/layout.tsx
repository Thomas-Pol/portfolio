import React from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './styles.css'



export const metadata = {
  title: 'Portfolio Thomas Pol - Full Stack Developer',
  description: 'Full stack developer portfolio showcasing projects in React, Next.js, TypeScript, Node.js, Laravel and PHP. Explore my work in frontend and backend development.',
  keywords: ['Thomas Pol', 'portfolio', 'full stack developer', 'React', 'Next.js', 'TypeScript', 'web development'],
  authors: [{ name: 'Thomas Pol' }],
  openGraph: {
    title: 'Portfolio Thomas Pol - Full Stack Developer',
    description: 'Full stack developer portfolio showcasing projects in React, Next.js, TypeScript, Node.js, Laravel and PHP.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Thomas Pol Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio Thomas Pol - Full Stack Developer',
    description: 'Full stack developer portfolio showcasing projects in React, Next.js, TypeScript, Node.js, Laravel and PHP.',
  },
}



export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className="w-screen flex flex-col justify-center items-center overflow-x-hidden">
        <Header />
        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  )
}