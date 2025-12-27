import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Poppins } from 'next/font/google'

export const metadata: Metadata = {
  title: "Mantis",
  description: "Mantis studio",
};

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})


export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <link rel="icon" href="/favicon.png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
