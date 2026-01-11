import type { Metadata } from 'next';
import { Geist_Mono, Inter } from 'next/font/google';
import './globals.css';
import NavBar from './_components/Navbar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title:  'Abhishek | Portfolio',
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
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-neutral-100 pb-40  max-w-[600px] mx-auto sm:px-6">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
