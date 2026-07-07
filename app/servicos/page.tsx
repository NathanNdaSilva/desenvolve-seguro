import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/constants/services";
import { HeroSection } from "@/components/sections/HeroSection";
import { Newsletter } from "@/components/sections/Newsletter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nossos Serviços | Seguro de Vida, Saúde e RC | Rhema",
  description:
    "Conheça os serviços da Rhema: Seguro de Vida com planejamento sucessório, Seguro Saúde com rede credenciada e Responsabilidade Civil para empresas. Proteção personalizada.",
  alternates: {
    canonical: "/servicos",
  },
  openGraph: {
    title: "Nossos Serviços | Rhema Corretora de Seguros",
    description: "Seguro de Vida, Saúde e Responsabilidade Civil. Soluções personalizadas para proteger você e sua empresa.",
    url: "/servicos",
    siteName: "Rhema Corretora de Seguros",
    images: [
      {
        url: "/vida.png",
        width: 1200,
        height: 630,
        alt: "Serviços Rhema",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  keywords: "seguro de vida, seguro saúde, responsabilidade civil, corretora de seguros, proteção patrimonial",
};

export default function ServicosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* 1. HERO SECTION COM VÍDEO DE FUNDO */}
      <HeroSection
        title="Nossos Serviços"
        subtitle="Soluções de proteção sob medida para você e sua empresa."
        videoSrc="/media/video_2.mp4"
      />

      {/* 2. LISTA DE SERVIÇOS */}
      <section className="py-16 md:py-20 container mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-16 md:gap-20 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.slug}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-10 lg:gap-16 items-center group`}
              >
                {/* Imagem */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted/50 border border-border shadow-md">
                    <Image
                      src={service.imageSrc}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div>
                    <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                      {service.introSubtitle}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.introDescription}
                    </p>
                  </div>

                  {/* Metodologia (3 primeiros itens) */}
                  <ul className="space-y-3">
                    {service.methodology.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* BOTÃO - VOLTOU PARA VER DETALHES */}
                  <Link href={`/servicos/${service.slug}`}>
                    <Button className="rounded-full px-8 group cursor-pointer">
                      Ver detalhes do serviço
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. CALL TO ACTION */}
      <section className="py-16 md:py-20 bg-primary/5 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Não sabe por onde começar?
          </h2>
          <p className="text-muted-foreground mb-8">
            Fale com um de nossos especialistas. Faremos um diagnóstico detalhado do seu perfil para entender exatamente qual solução trará o maior retorno para o seu momento atual.
          </p>
          <Link href="/cotacao">
            <Button size="lg" className="rounded-full px-10 h-14 text-base shadow-lg hover:shadow-xl transition-all cursor-pointer">
              Solicitar Diagnóstico Gratuito
            </Button>
          </Link>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}