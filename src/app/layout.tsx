import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#141210",
};

export const metadata: Metadata = {
  title: {
    default: "Lion Intentional Fathers | Biblical Fatherhood for the Modern Dad",
    template: "%s — Lion Intentional Fathers",
  },
  description:
    "Be the dad your sons need. Lion equips men through small groups, weekend camps, and a brotherhood committed to raising the next generation with courage, faith, and love.",
  keywords: [
    "fatherhood",
    "biblical fatherhood",
    "men's ministry",
    "dad",
    "intentional father",
    "small group",
    "men's camp",
    "Christian fatherhood",
    "fatherhood ministry",
    "Lexington KY",
  ],
  authors: [{ name: "Jeremy Stiffler" }],
  creator: "Lion Intentional Fathers",
  publisher: "Lion Intentional Fathers",
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
  openGraph: {
    title: "Lion — Intentional Fathers",
    description:
      "Be the dad your sons need. Brotherhood, mentorship, and biblical fatherhood.",
    siteName: "Lion Intentional Fathers",
    type: "website",
    locale: "en_US",
    url: "https://lionheartdad.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lion — Intentional Fathers",
    description:
      "Be the dad your sons need. Brotherhood, mentorship, and biblical fatherhood.",
  },
  alternates: {
    canonical: "https://lionheartdad.com",
  },
  verification: {
    google: "TODO_ADD_GOOGLE_SITE_VERIFICATION",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <GoogleAnalytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
