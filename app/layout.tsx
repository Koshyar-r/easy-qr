import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "EasyQR - Free QR Code Generator",
  description: "EasyQR is a fast and free QR code generator app that lets you create custom QR codes in seconds. start making your QR codes today with EasyQR!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
