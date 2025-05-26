import './globals.css'

import { Toaster } from '@/components/ui/sonner'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='pt-BR'
      suppressHydrationWarning
    >
      <body className='antialiased'>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
