import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Keshav digital",
  description: "Keshav Digital offers high-quality textile products, advanced machinery, and tailored solutions for modern industries. Contact us for custom orders and inquiries.",
  keywords: ["Textile Solutions", "Textile Machinery", "Custom Fabrics", "Keshav Digital", "Industrial Textiles", "Fabric Manufacturing"],
  authors: [{ name: "Keshav Digital" }],
  creator: "Keshav Digital",
  publisher: "Keshav Digital",
  icons: {
    icon: '/logo.ico', 
    shortcut: "/logo.ico",
    apple: "/logo.ico",
  },
  openGraph:{
    title: "Keshav Digital | Premium Textile Solutions",
    description: "Leading provider of high-quality textile products and machinery. Explore our wide range of industrial textile solutions.",
    url: "https://keshav-digital.vercel.app/", 
    siteName: "Keshav Digital",
    images: [
      {
        url: "https://keshav-digital.vercel.app/images/kd1.png",
        width: 1200,
        height: 630,
        alt: "Keshav Digital Website Preview",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots:{
    index:true,
    follow:true,
    googleBot:{
      index:true,
      follow:true,
      "max-video-preview":-1,
      "max-image-preview":"large",
      "max-snippet":-1,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
