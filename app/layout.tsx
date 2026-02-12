import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/context/ToastContext";

import SiteLayout from "@/components/SiteLayout";

const chakra = Chakra_Petch({
  subsets: ["latin"],
  variable: "--font-chakra",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BigWin959",
  description: "Win real money with BigWin959! Enjoy thrilling live casino games, huge jackpots, and secure payments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${chakra.variable} ${chakra.className} chakra-font antialiased text-text bg-background`}>
        <ToastProvider>
          <SiteLayout>
            {children}
          </SiteLayout>
        </ToastProvider>
      </body>
    </html>
  );
}
