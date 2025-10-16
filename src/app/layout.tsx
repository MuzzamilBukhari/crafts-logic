import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://craftslogic.com'),
  title: "CraftsLogic – Digital Craftsmanship in Code & AI",
  description: "We build digital experiences that merge design, code, and intelligence. Specializing in Full Stack Development, AI Automation, UI/UX Design, and more.",
  keywords: ["web development", "AI automation", "UI/UX design", "full stack", "shopify", "wordpress", "digital agency"],
  authors: [{ name: "CraftsLogic Team" }],
  openGraph: {
    title: "CraftsLogic – Digital Craftsmanship in Code & AI",
    description: "We build digital experiences that merge design, code, and intelligence.",
    url: "https://craftslogic.com",
    siteName: "CraftsLogic",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CraftsLogic - Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CraftsLogic – Digital Craftsmanship in Code & AI",
    description: "We build digital experiences that merge design, code, and intelligence.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",

  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <ThemeProvider defaultTheme="system" enableSystem>
          <Navigation />
          <main className="flex-grow pt-16 lg:pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}