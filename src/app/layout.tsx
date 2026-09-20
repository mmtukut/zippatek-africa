import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { organizationJsonLd } from '@/lib/company';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://zippatek.com'),
  title: 'Zippatek | Building Africa\'s Property Intelligence Infrastructure',
  description: "AI-powered platforms solving Africa's ₦2T property problem. Satellite mapping, fraud-free marketplaces, and government revenue recovery.",
  keywords: "PropTech Nigeria, Property Technology Africa, Real Estate AI, Satellite Mapping",
  openGraph: {
    title: 'Zippatek | Property Intelligence for Africa',
    description: 'Leveraging satellite AI to map unmapped properties and connect Africans to verified real estate.',
    url: 'https://zippatek.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zippatek Social Sharing Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zippatek | Property Intelligence for Africa',
    description: "AI + Satellite tech solving Africa's ₦2T property problem.",
    images: ['/twitter-card.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/zippatek_logo.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={cn(
          "min-h-screen bg-background font-body antialiased flex flex-col"
        )}>
        <Header />
        <main className="relative overflow-x-hidden flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
