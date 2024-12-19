import type { Metadata } from "next"
import { JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '../components/theme-provider'
import "./globals.css"

const mono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "kel404",
  description: "",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${mono.className} antialiased min-h-screen bg-white text-black dark:bg-black dark:text-white text-base`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

