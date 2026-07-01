
import "./globals.css";

import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'BBSAzul',
  description: 'Salvando o oceano com pequenas ações!',
  openGraph: {
    title: 'BBSAzul: o mar de Bombinhas em tempo real.',
    description: 'Saiba a qualidade das praias de Bombinhas.'
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    }

  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`antialiased`}
    >

      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
