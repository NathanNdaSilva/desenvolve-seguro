import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/sections/HeroSection";
import { Newsletter } from "@/components/sections/Newsletter";
import { Service } from "@/constants/services";

export default function ServicoDetalheTemplate({ service }: { service: Service }) {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title={service.title}
        subtitle={service.heroSubtitle}
        videoSrc={service.videoSrc}
      />

      <section className="py-16 md:py-20 container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/servicos"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para serviços
          </Link>

          {/* Imagem e Introdução */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-primary/5 border border-border shadow-md">
              <Image
                src={service.imageSrc}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-4"
                priority
              />
            </div>
            <div>
              <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                {service.introSubtitle}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {service.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.introDescription}
              </p>
            </div>
          </div>

          {/* Metodologia */}
          <div className="bg-muted/30 border border-border rounded-2xl p-8 md:p-10 mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              O Método Rhema: Proteção Sem Burocracia
            </h2>
            <p className="text-muted-foreground mb-8">
              Desenvolvemos uma abordagem em 4 etapas para tirar o peso técnico das suas costas, garantindo que você pague apenas pelo que realmente precisa.
            </p>
            <div className="space-y-6">
              {service.methodology.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary text-white rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Pronto para proteger o que você construiu?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Fale com um consultor especialista e descubra a melhor solução para o seu momento.
            </p>
            <Link href="/cotacao">
              <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6 h-auto text-base font-semibold shadow-lg hover:shadow-xl transition-all cursor-pointer">
                {service.ctaText}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
