import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Image from 'next/image';
import Link from 'next/link';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'WordEm - Master Your Vocabulary',
  description:
    'Expand your vocabulary and improve your language skills with WordEm, the intelligent word learning app.',
  keywords: ['vocabulary', 'language learning', 'education', 'app', 'WordEm'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.wordem.org/',
    siteName: 'WordEm',
    title: 'WordEm - Master Your Vocabulary',
    description:
      'Expand your vocabulary and improve your language skills with WordEm, the intelligent word learning app.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="flex items-center justify-between bg-[#F5F0E5] px-6 py-2">
          <div className="flex items-center space-x-4">
            <Image src="/images/wordem-icon-edited.png" alt="WordEm logo" width={50} height={50} />
            <Link href="/" className="text-2xl font-bold text-[#009963]">
              WordEm
            </Link>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li className="flex items-center justify-center">
                <Link href="/" className="text-[#009963] hover:underline">
                  Home
                </Link>
              </li>
              <li className="flex items-center justify-center">
                <Link href="/blog" className="text-[#009963] hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
        <footer className="bg-[#F5F0E5] px-6 py-8 text-[#009963]">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col items-center justify-between md:flex-row">
              <div className="mb-6 text-center md:mb-0 md:text-left">
                <p className="font-semibold">© 2024 WordEm. All rights reserved.</p>
                <Link
                  href="mailto:support@desight.co?subject=Question%20or%20suggestion"
                  className="transition-colors duration-200 hover:underline"
                >
                  support@desight.co
                </Link>
              </div>
              <div className="flex gap-6">
                <Link href="/terms" className="transition-colors duration-200 hover:text-[#66b8a3]">
                  Terms of Use
                </Link>
                <Link
                  href="/privacy"
                  className="transition-colors duration-200 hover:text-[#66b8a3]"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
