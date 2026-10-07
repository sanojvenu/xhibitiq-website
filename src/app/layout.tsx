import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "XhibitIQ | Marketing, Creative, Experiences & Technology",
  description:
    "XhibitIQ is a growth-focused marketing, creative, experiences and technology company helping businesses build brands, generate demand, create experiences and transform through technology.",
  keywords: [
    "digital marketing agency",
    "B2B marketing",
    "demand generation",
    "creative agency",
    "branding agency",
    "event agency",
    "conference management",
    "technology consulting",
    "AI consulting",
    "digital transformation",
    "marketing agency",
    "B2B events",
    "corporate events",
    "XhibitIQ",
    "Build What's Next"
  ],
  authors: [{ name: "XhibitIQ Agency" }],
  openGraph: {
    title: "XhibitIQ | Build What's Next",
    description: "Marketing • Creative • Experiences • Technology. We connect ideas, people and technology to create brands, experiences and growth that matter.",
    url: "https://xhibitiq.com",
    siteName: "XhibitIQ",
    images: [
      {
        url: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "XhibitIQ Integrated Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XhibitIQ | Build What's Next",
    description: "Marketing • Creative • Experiences • Technology Agency",
  },
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth antialiased`}>
      <body className="bg-white text-[#111318] selection:bg-[#FF7A00] selection:text-white font-sans flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
