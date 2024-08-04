import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Banger",
  description: "Pour que toutes vos soirées deviennent des Bangers 😎🥳"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://use.typekit.net/lgy5czk.css"></link>
      </head>
      <body className={cn(
        'min-h-screen font-sans antialiased grainy',
        inter.className
      )}>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
