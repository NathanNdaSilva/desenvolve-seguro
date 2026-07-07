import { Button } from "@/components/ui/button";
import { Film } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionBadge } from "@/components/common/SectionBadge";
import { ServiceRowCard } from "@/components/common/ServiceRowCard";
import { SuccessCase } from "@/components/sections/SuccessCase";
import { Newsletter } from "@/components/sections/Newsletter";
import { Metadata } from "next";
import { services } from "@/constants/services";
import Link from "next/link";
import Hero from "@/components/Hero"; // <- Importando a nova Hero

export const metadata: Metadata = {
  title: "Rhema Corretora de Seguros | Proteção em Vida, Saúde e RC",
  description:
    "Consultoria especializada em seguros de vida, saúde e responsabilidade civil. Proteja sua família e seu patrimônio com a Rhema. Faça uma simulação online.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rhema Corretora de Seguros | Proteção Inteligente",
    description: "Consultoria especializada em seguros de vida, saúde e responsabilidade civil. Proteja sua família e seu patrimônio.",
    url: "/",
    siteName: "Rhema Corretora de Seguros",
    images: [
      {
        url: "/logo_rhema.png",
        width: 1200,
        height: 630,
        alt: "Rhema Corretora de Seguros",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  keywords: "seguro de vida, seguro saúde, responsabilidade civil, corretora de seguros, proteção patrimonial, planejamento sucessório",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION - NOVA VERSÃO */}
      <Hero />

      {/* 2. QUEM SOMOS - BADGE CLICÁVEL */}
      <section className="py-16 container mx-auto px-4 md:px-8">
        <SectionBadge href="/quem-somos">Quem somos</SectionBadge>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="bg-primary/5 aspect-[4/3] rounded-3xl flex items-center justify-center border border-border shadow-inner overflow-hidden p-6">
            <div className="relative w-full h-full max-h-[350px]">
              <Image
                src="/logo_rhema.png"
                alt="Rhema Corretora de Seguros"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain object-center"
              />
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-base md:text-lg text-[#1A1A1A] leading-relaxed">
              <span className="font-semibold text-primary">Rhema</span>, do grego ῥῆμα, significa "palavra falada" — a revelação específica. 
              Nós nascemos para trazer a clareza e a direção que você precisa para proteger o que construiu, sob a premissa de que tudo o 
              que temos é para um propósito maior.
            </p>
            <Link href="/quem-somos">
              <Button variant="outline" className="rounded-full px-8 cursor-pointer">
                Saiba mais
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. VÍDEO E CARROSSEL */}
      <section className="py-16 relative overflow-hidden bg-gradient-to-r from-primary/90 to-primary/60 text-white">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Nossos Destaques</h2>
            <p className="mt-2 text-white/80 max-w-2xl text-sm md:text-base">
              Acompanhe nossos resultados e o impacto visual que geramos nos projetos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* COLUNA 1: VÍDEO INLINE */}
            <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-xl border border-white/20">
              <video
                autoPlay
                loop
                muted
                playsInline
                controls
                className="w-full h-full object-cover"
              >
                <source src="/media/video_1.mp4" type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
              </video>
            </div>
            <div className="w-full px-8 lg:px-0">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {[
                    { src: "/saude.png", alt: "Responsabilidade Civil - Proteção Jurídica" },
                    { src: "/rc_1.png", alt: "Responsabilidade Civil - Segurança Empresarial" },
                    { src: "/vida.png", alt: "Seguro de Vida - Proteção para sua Família" },
                  ].map((image, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-full">
                      <div className="p-1">
                        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/20 shadow-sm bg-black/10">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselPrevious className="hidden md:flex -left-2 lg:-left-4 bg-white/20 hover:bg-white/40 border-none text-white cursor-pointer" />
                <CarouselNext className="hidden md:flex -right-2 lg:-right-4 bg-white/20 hover:bg-white/40 border-none text-white cursor-pointer" />
              </Carousel>
            </div>
          </div>

          {/* Botão Serviços - apenas um */}
          <div className="mt-10 text-center">
            <Link href="/servicos">
              <Button 
                variant="secondary" 
                className="rounded-full px-8 h-11 text-sm bg-white text-primary hover:bg-white/90 transition-all cursor-pointer"
              >
                Ver todos os serviços
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. SERVIÇOS - BADGE CLICÁVEL */}
      <section className="py-16 container mx-auto px-4 md:px-8 max-w-5xl">
        <SectionBadge href="/servicos">Serviços</SectionBadge>

        <div className="flex flex-col gap-4">
          {services.slice(0, 3).map((service) => (
            <ServiceRowCard
              key={service.slug}
              title={service.title}
              description={service.introSubtitle}
              href={`/servicos/${service.slug}`}
            />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link href="/servicos">
            <Button
              variant="outline"
              className="rounded-full px-8 h-11 text-sm hover:bg-primary hover:text-white transition-all cursor-pointer"
            >
              Ver todos os serviços
            </Button>
          </Link>
        </div>
      </section>

      {/* 5. COMPONENTES GLOBAIS */}
      <SuccessCase />
      <Newsletter />
    </div>
  );
}
