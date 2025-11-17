import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Yellr Demo',
  description: 'A modern Next.js landing page for Yellr.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
