import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LangProvider } from '@/app/context/LangContext';

const inter = Inter({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'VisionDelTurco | AI Ajans',
  description: 'Yapay zeka destekli chatbot, otomasyon ve web cozumleri.',
  keywords: 'AI agency, chatbot, automation, web development, mobile app, artificial intelligence',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-[#F8F5F0] text-[#0b0f1a] antialiased overflow-x-hidden">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
