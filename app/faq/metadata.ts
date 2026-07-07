import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perguntas Frequentes - FAQ | Rhema Corretora de Seguros",
  description:
    "Tire suas dúvidas sobre seguros de vida, saúde e responsabilidade civil. FAQ completo com as perguntas mais comuns sobre proteção financeira.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ | Rhema Corretora de Seguros",
    description: "Tire suas dúvidas sobre seguros de vida, saúde e responsabilidade civil.",
    url: "/faq",
    siteName: "Rhema Corretora de Seguros",
    images: [
      {
        url: "/logo_rhema.png",
        width: 1200,
        height: 630,
        alt: "FAQ Rhema",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  keywords: "faq seguros, perguntas frequentes, seguro de vida, seguro saúde, responsabilidade civil, dúvidas seguros",
};
