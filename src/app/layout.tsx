import "~/styles/globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { cn } from "~/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Framer Motion Carousel",
  description:
    "The example page for the final Framer Motion carousel slider tutorial.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex min-h-screen overflow-x-hidden bg-gray-950 text-gray-50",
          inter.className,
        )}
      >
        <main className="flex flex-1 flex-col items-center justify-center gap-12">
          {children}
        </main>
      </body>
    </html>
  )
}
