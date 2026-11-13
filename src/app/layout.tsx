import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next";



const inter = Inter({ 
  variable: "--font-inter",
  subsets: ["latin"] 
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-mono bg-amber-100 scale-100">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
