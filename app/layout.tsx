import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const oceanic = localFont({
  src: [
    {
      path: './fonts/Oceanic-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Oceanic-Medium.otf',
      weight: '500',
      style: 'normal',
    },

  ],
  variable: '--font-oceanic',
  display: 'swap',
});

const gilroy = localFont({
  src: [
    {
      path: './fonts/Gilroy-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Gilroy-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Gilroy-Semibold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-gilroy',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "AQUARIM | Рыбный ресторан",
  description: "Свежие морепродукты и незабываемая атмосфера",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${oceanic.variable} ${gilroy.variable} bg-dark-blue text-aquarim-text antialiased`}>
        <Header />
        <main className="min-h-screen flex flex-col items-center w-full">
            {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
