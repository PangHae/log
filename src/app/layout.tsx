import localFont from 'next/font/local';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import type { Metadata } from 'next';

import '@/styles/constants/_colors.scss';
import '@/styles/globals.scss';
import '@/styles/reset.scss';

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
  title: 'HomeBar Menu',
  description: 'panghae-house-menu',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
