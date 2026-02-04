import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const chakra = Chakra_Petch({
  subsets: ["latin"],
  variable: "--font-chakra",
  weight: ["300", "400", "500", "600", "700"],
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
      <body className={`${chakra.variable} ${chakra.className} chakra-font antialiased text-text bg-background`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
