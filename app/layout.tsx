import type React from "react"
import type { Metadata } from "next"
// 1. Import Anek_Tamil instead of Tiro_Tamil
import { Montserrat, Anek_Tamil } from "next/font/google" 
import { Open_Sans } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

// 2. Configure the Anek Tamil font
const anekTamil = Anek_Tamil({
  subsets: ["tamil"],
  display: "swap",
  variable: "--font-anek-tamil", // Use a new variable name
  weight: ["400", "700"], // Anek Tamil supports multiple weights
});

export const metadata: Metadata = {
  title: " Sri Selva Vinayaga Sweets - Traditional Indian Sweets",
  description:
    "Authentic traditional Indian sweets made with love. Explore our collection of Burfi, traditional sweets, and more.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // 3. Add the new font variable to the html tag
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} ${anekTamil.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}