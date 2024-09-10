import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "AI Blog",
  description: "Innovative AI Blog Posts & News",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="bg-slate-600">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
