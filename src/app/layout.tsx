import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CookiesProvider } from 'next-client-cookies/server';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Digital Craft",
        template: "%s | Digital Craft"
    },
    description: "Expert web development, SEO optimization, and digital solutions to grow your business. Custom websites, eCommerce, and mobile apps.",
    keywords: [
        "web development",
        "digital agency",
        "SEO optimization",
        "eCommerce",
        "website design",
        "React development",
        "Next.js experts"
    ],
    authors: [{ name: "Digital Craft Team", url: "https://digitalcraft.com" }],
    creator: "Digital Craft",
    publisher: "Digital Craft",
    metadataBase: new URL("https://www.digitalcraft.com"),
    alternates: {
        canonical: "/",
        languages: {
            "en-US": "/en-US",
        },
    },
    openGraph: {
        title: "Digital Craft | Web Development & Digital Solutions",
        description: "Expert web development, SEO optimization, and digital solutions to grow your business.",
        url: "https://www.digitalcraft.com",
        siteName: "Digital Craft",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Digital Craft - Web Development Agency",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Digital Craft | Web Development & Digital Solutions",
        description: "Expert web development, SEO optimization, and digital solutions to grow your business.",
        creator: "@digitalcraft",
        images: ["/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "your-google-verification-code",
        yandex: "your-yandex-verification-code",
    },
    icons: {
        icon: "/logo1.png",
        shortcut: "/logo1.png",
        apple: "/logo1.png",
    },
    manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <CookiesProvider>
          <html lang="en">

          <body
              className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen relative bg-gray overflow-x-hidden`}
          >
          {children}
          </body>
          </html>
      </CookiesProvider>

  );
}