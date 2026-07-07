import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GoogleTagManager } from "@next/third-parties/google";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const SITE_URL = "https://www.rhema.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Rhema Corretora de Seguros",
    default: "Rhema Corretora de Seguros | Proteção em Vida, Saúde e RC",
  },
  description:
    "Consultoria especializada em seguros de vida, saúde e responsabilidade civil. Proteja sua família e seu patrimônio com a Rhema.",
  authors: [{ name: "Meta Consultoria", url: "https://metaconsultoria.com" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    title: "Rhema Corretora de Seguros | Proteção Inteligente",
    description:
      "Consultoria especializada em seguros de vida, saúde e responsabilidade civil. Proteja sua família e seu patrimônio.",
    siteName: "Rhema Corretora de Seguros",
    images: [
      {
        url: "/logo_rhema.png",
        width: 1200,
        height: 630,
        alt: "Rhema Corretora de Seguros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rhema Corretora de Seguros | Proteção Inteligente",
    description:
      "Consultoria especializada em seguros de vida, saúde e responsabilidade civil.",
    images: ["/logo_rhema.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceBrokerage",
  name: "Rhema Corretora de Seguros",
  url: SITE_URL,
  logo: `${SITE_URL}/logo_rhema.png`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-11-99999-9999",
    contactType: "customer service",
    areaServed: "BR",
    availableLanguage: "Portuguese",
  },
  sameAs: [
    "https://www.instagram.com/rhemacorretora",
    "https://www.linkedin.com/company/rhemacorretora"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${roboto.variable} antialiased flex min-h-screen flex-col font-roboto`}>
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        )}
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
