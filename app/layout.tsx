import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Win Real Money with Banglabet88 - Best Live Casino in BD",
  description: "Win real money with Banglabet! Enjoy thrilling live casino games, huge jackpots, and secure payments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} font-sans antialiased text-text bg-background`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
