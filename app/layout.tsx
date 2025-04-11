import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { defaultMetadata } from './metadata';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 