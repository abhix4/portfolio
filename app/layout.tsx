import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import NavBar from './_components/Navbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Abhishek | Portfolio',
    template: '%s | Abhishek',
  },
  description:
    'Just vibin’ through code, shipping small PRs and building cool stuff 🚀✨',
  openGraph: {
    siteName: "Abhishek's Portfolio",
    images: ['/oss.png'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/oss.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  py-[50px] bg-bg-color-black font-Poppins  sm:py-10 max-w-[600px] mx-auto  sm:px-6`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
