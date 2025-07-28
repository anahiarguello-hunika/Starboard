import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Stbd Law Platform',
  description: 'The AI-powered legal dashboard for modern teams.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
        <Script src="/src/lib/frameworks-bootstrap.min.js" strategy="beforeInteractive" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
