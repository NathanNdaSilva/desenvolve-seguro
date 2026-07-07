import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faça sua Cotação | Seguro de Vida, Saúde e RC | Rhema",
  description:
    "Solicite uma cotação personalizada de seguro de vida, saúde ou responsabilidade civil. Análise consultiva gratuita com especialistas da Rhema.",
  alternates: {
    canonical: "/cotacao",
  },
  openGraph: {
    title: "Faça sua Cotação | Rhema Corretora de Seguros",
    description: "Solicite uma cotação personalizada e proteja o que você construiu.",
    url: "/cotacao",
    siteName: "Rhema Corretora de Seguros",
    images: [
      {
        url: "/logo_rhema.png",
        width: 1200,
        height: 630,
        alt: "Cotação Rhema",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  keywords: "cotação de seguro, seguro de vida cotação, seguro saúde cotação, responsabilidade civil cotação",
};
