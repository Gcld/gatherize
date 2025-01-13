import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import RootLayoutClient from "./RootLayoutClient";
import StyledComponentsRegistry from "./registry";

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
      <head>
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
      </head>
      <body className={nunito_sans.className}>
        <StyledComponentsRegistry>
          <RootLayoutClient>{children}</RootLayoutClient>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}