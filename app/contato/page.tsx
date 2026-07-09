import { Mail, Clock } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import PageHero from "@/components/common/PageHero";
import Image from "next/image"; // <- ADICIONE ESTE IMPORT

// Componentes importados
import { ContactForm } from "@/components/forms/ContactForm";
import { GoogleMapEmbed } from "@/components/common/GoogleMapEmbed";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Rhema Corretora de Seguros",
  description:
    "Entre em contato com a Rhema. Tire suas dúvidas, solicite uma cotação ou agende uma consultoria especializada em seguros.",
  alternates: {
    canonical: "/contato",
  },
  openGraph: {
    title: "Contato | Rhema Corretora de Seguros",
    description: "Entre em contato com a Rhema e proteja o que você construiu.",
    url: "/contato",
    siteName: "Rhema Corretora de Seguros",
    images: [
      {
        url: "/logo_rhema.png",
        width: 1200,
        height: 630,
        alt: "Contato Rhema",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  keywords: "contato rhema, corretora de seguros, cotação de seguros, consultoria em seguros",
};

export default function ContatoPage() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      
      {/* BANNER AZUL COM TÍTULO */}
      <PageHero 
        title="Entre em contato"
        subtitle="Estamos prontos para entender as necessidades da sua empresa e proteger o que você construiu"
        breadcrumb="Contato"
      />

      <section className="py-24 container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* COLUNA ESQUERDA: Informações */}
            <div className="space-y-6">
              {/* Horário */}
              <div className="bg-muted/50 border border-border rounded-3xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" /> Horário de
                    funcionamento
                  </h3>
                  <p className="text-muted-foreground">Segunda a Sexta</p>
                  <p className="text-foreground font-medium">09:00 - 18:00</p>
                </div>
              </div>

              {/* Contatos */}
              <div className="bg-muted/50 border border-border rounded-3xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <h3 className="font-semibold text-xl mb-6">Contato direto</h3>
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="mailto:timepack10@gmail.com"
                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Mail className="w-5 h-5" /> timepack10@gmail.com
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <FaWhatsapp className="w-5 h-5" /> +55 (11) 92108-1491
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <FaInstagram className="w-5 h-5" /> @rhema.corretora
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

                            {/* LOGO DA RHEMA - Substituindo o mapa */}
              <div className="bg-[#0A3455] border border-primary/20 rounded-3xl p-8 flex items-center justify-center min-h-[200px]">
                <div className="relative w-full max-w-[400px] h-[250px] md:h-[300px]">
                  <Image
                    src="/logo_rhema_2.png"
                    alt="Rhema Corretora de Seguros"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* COLUNA DIREITA: Formulário Componentizado! */}
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
