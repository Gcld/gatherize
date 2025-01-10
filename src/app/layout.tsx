import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import RootLayoutClient from "./RootLayoutClient";


const nunito_sans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['200', '300', '400', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "Gatherize",
  description: "Event management made simple",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito_sans.className}>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}