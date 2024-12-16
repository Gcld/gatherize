import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito_sans.className}`}>
        <StyledComponentsRegistry>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
            <main className="main">
              {children}
            </main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
