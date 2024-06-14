import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/css/globals.css";
import appdata from "@/utils/metadata";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: appdata.title,
  description: appdata.desc,
  metadataBase: appdata.metadataBase,
  alternates: appdata.alternates
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
