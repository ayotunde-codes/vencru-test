import "../styles/globals.css";
import MainLayout from "./components/MainLayout";

import { Inter } from "@next/font/google";

const inter = Inter();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />

      <body className={inter.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
