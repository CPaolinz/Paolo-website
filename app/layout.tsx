import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Paolo Paolini — Research, ideas & people',
    template: '%s · Paolo Paolini'
  },
  description:
    'I work across information systems, hypertext, multimedia communication, cultural heritage, accessibility, and learning. A personal research site exploring the ideas connecting them.',
  applicationName: 'Paolo Paolini — Personal Research Site',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    title: 'Paolo Paolini — Research, ideas & people',
    description: 'My work across information models, hypertext, culture, learning, and people.',
    siteName: 'Paolo Paolini — Research, ideas & people',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'A connected map of ideas in data, hypertext, and human experience' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paolo Paolini — Research, ideas & people',
    description: 'I explore how information can become a meaningful digital experience.',
    images: ['/og-card.png']
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f7f3eb',
  colorScheme: 'light'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
