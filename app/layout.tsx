import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from './_components/Navbar';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Abhishek',
  description:
    'Just vibin’ through code, shipping small PRs and building cool stuff 🚀✨',
  openGraph: {
    siteName: "Abhishek's Portfolio",
    images: [
      {
        url: 'https://i.abhiifour.xyz/ossv1.png?v=2',
        width: 1200,
        height: 630,
        alt: 'Abhishek Portfolio OG Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://i.abhiifour.xyz/ossv1.png?v=2'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} `}>
      <body className="antialiased bg-[#FEFFFF] pb-40 sm:ml-0 max-w-[500px]  ml-12 sm:px-6">
        <NavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
