import React from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './styles.css'



export const metadata = {
  title: 'Portfolio Thomas Pol',
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