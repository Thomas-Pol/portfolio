import React from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { StructuredData } from '@/components/StructuredData'
import './styles.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio Thomas Pol - Full Stack Web Developer',
  description: 'Professional portfolio of Thomas Pol, a passionate full-stack web developer specializing in React, Next.js, TypeScript, Laravel, and modern web technologies. Explore my projects and get in touch.',
  keywords: ['Thomas Pol', 'Web Developer', 'Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Laravel', 'Portfolio', 'Web Development'],
  authors: [{ name: 'Thomas Pol' }],
  creator: 'Thomas Pol',
  publisher: 'Thomas Pol',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thomas-pol.com/',
    title: 'Portfolio Thomas Pol - Full Stack Web Developer',
    description: 'Professional portfolio of Thomas Pol, a passionate full-stack web developer specializing in React, Next.js, TypeScript, Laravel, and modern web technologies.',
    siteName: 'Thomas Pol Portfolio',
    images: [
      {
        url: '/img/aa51605b-2659-4a55-8ddc-0e1b0f552816.jpg',
        width: 1200,
        height: 630,
        alt: 'Thomas Pol - Full Stack Web Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio Thomas Pol - Full Stack Web Developer',
    description: 'Professional portfolio of Thomas Pol, a passionate full-stack web developer specializing in React, Next.js, TypeScript, Laravel, and modern web technologies.',
    images: ['/img/aa51605b-2659-4a55-8ddc-0e1b0f552816.jpg'],
  },
  alternates: {
    canonical: 'https://thomas-pol.com/',
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://thomas-pol.com/" />
        <StructuredData />
      </head>
      <body className="w-screen flex flex-col justify-center items-center overflow-x-hidden">
        <Header />
        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  )
}