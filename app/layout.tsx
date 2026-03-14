import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Anton, Bebas_Neue, Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const _geist = Geist({ subsets: ['latin'], variable: '--font-geist' });
const _geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});
const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
});
const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
});

export const metadata: Metadata = {
  title: 'All-American Food Fest | OCT 12-14, 2026',
  description:
    'The ultimate American food festival featuring BBQ, live music, craft beer, and food trucks. Get your tickets now!',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${bebasNeue.variable}`}>
      <body className="font-sans antialiased bg-festival-yellow">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
