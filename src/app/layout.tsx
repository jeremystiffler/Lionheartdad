import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lion Intentional Fathers | Biblical Fatherhood for the Modern Dad",
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
  ],
  openGraph: {
    title: "Lion — Intentional Fathers",
    description:
      "Be the dad your sons need. Brotherhood, mentorship, and biblical fatherhood.",
    siteName: "Lion",
    type: "website",
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
