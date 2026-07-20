import { Target, TrendingUp, Users, Shield, Heart, Briefcase, Star, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionBadge } from "@/components/common/SectionBadge";
import { StatCard } from "@/components/common/StatCard";
import { TestimonialCard } from "@/components/common/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quem Somos | Rhema Corretora de Seguros",
  description:
    "Conheça a história da Rhema Corretora de Seguros. Consultoria especializada com ética, transparência e proteção para sua família e empresa.",
  alternates: {
    canonical: "/quem-somos",
  },
  openGraph: {
    title: "Quem Somos | Rhema Corretora de Seguros",
    description: "Conheça a história e os valores da Rhema. Proteção com propósito para sua família e empresa.",
    url: "/quem-somos",
    siteName: "Rhema Corretora de Seguros",
    images: [
      {
        url: "/romulo_preto.png",
        width: 1200,
        height: 630,
        alt: "Rômulo - Fundador da Rhema Corretora de Seguros",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  keywords: "quem somos rhema, corretora de seguros, proteção patrimonial, consultoria em seguros",
};

export default function QuemSomosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <HeroSection
        title="Quem somos"
        subtitle="A intersecção exata entre segurança financeira, competência técnica e cuidado humano."
        showArrow
        videoSrc="/media/video_3.mp4"
      />

      {/* 2. HISTÓRIA E PROPÓSITO */}
      <section className="py-8 md:py-12 container mx-auto px-4 md:px-8">
        <SectionBadge>Nossa História</SectionBadge>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* IMAGEM COM FUNDO PRETO */}
          <div className="bg-black aspect-[4/3] rounded-3xl flex items-center justify-center border border-border shadow-inner overflow-hidden p-4">
            <div className="relative w-full h-full max-h-[500px]">
              <Image
                src="/romulo_preto.png"
                alt="Rômulo - Fundador da Rhema Corretora de Seguros"
                fill
                className="object-contain object-center"
              />
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Consolidação, Ética e Direção Clara
            </h2>
            <p className="text-base md:text-lg text-[#1A1A1A] leading-relaxed">
              A Rhema Corretora de Seguros nasceu do desejo do seu fundador, Rômulo, de entregar ao mercado uma consultoria em seguros que vai além do óbvio. 
              Rhema é a palavra falada por Deus, uma empresa que nasceu de um grande propósito de ajudar famílias.
            </p>
            <p className="text-base md:text-lg text-[#1A1A1A]/80 leading-relaxed">
              Buscamos trazer aos clientes as melhores soluções financeiras aliando qualidade e segurança. 
              Orientados por valores sólidos, nossa trajetória é desenhada para garantir que o seu patrimônio, sua saúde e sua empresa estejam blindados, 
              permitindo que você foque no que realmente importa: viver o presente com tranquilidade e planejar o amanhã com ousadia.
            </p>
          </div>
        </div>
      </section>

      {/* 3. NOSSOS PILARES FUNDAMENTAIS */}
      <section className="py-8 md:py-12 container mx-auto px-4 md:px-8">
        <SectionBadge>Nossos Pilares</SectionBadge>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          <div className="bg-background border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Consolidação</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Construímos relações sólidas e de longo prazo baseadas na robustez das nossas soluções e no 
              suporte incondicional aos nossos clientes nos momentos mais delicados.
            </p>
          </div>

          <div className="bg-background border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Ética</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Atuamos com transparência radical. Sem letras miúdas ou falsas promessas. Cada apólice desenhada 
              reflete milimetricamente a necessidade real do segurado.
            </p>
          </div>

          <div className="bg-background border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Direção Clara</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Acreditamos no papel pedagógico da consultoria. Traduzimos termos técnicos e complexos do mercado 
              para dar aos nossos clientes uma direção precisa e consciente.
            </p>
          </div>
        </div>
      </section>

      {/* 4. METODOLOGIA RHEMA */}
      <section className="py-8 md:py-12 container mx-auto px-4 md:px-8">
        <SectionBadge>Metodologia</SectionBadge>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              O Método Rhema: Proteção Sem Burocracia
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Desenvolvemos uma abordagem em 4 etapas para tirar o peso técnico das suas costas, garantindo que você pague apenas pelo que realmente precisa.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                step: "1",
                title: "Diagnóstico de Risco Personalizado",
                description:
                  "Analisamos o seu momento de vida ou a operação da sua empresa para mapear vulnerabilidades reais, evitando coberturas desnecessárias.",
              },
              {
                step: "2",
                title: "Curadoria e Cotação Inteligente",
                description:
                  "Filtramos as melhores opções do mercado nas maiores seguradoras do país, desenhando uma proposta com o melhor equilíbrio entre custo e benefício.",
              },
              {
                step: "3",
                title: "Ativação Descomplicada",
                description:
                  "Cuidamos de toda a parte burocrática e legal para que sua apólice seja emitida de forma rápida, transparente e totalmente digital.",
              },
              {
                step: "4",
                title: "Gestão Ativa e Suporte em Sinistros",
                description:
                  "Se o imprevisto acontecer, você não fala com robôs. Nossa equipe assume a linha de frente para garantir que sua indenização seja paga sem estresse.",
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4 p-4 bg-muted/30 border border-border rounded-xl hover:bg-muted/50 transition-colors">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground mb-0.5">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CULTURA ORGANIZACIONAL (Missão, Visão, Valores) */}
      <section className="py-8 md:py-12 container mx-auto px-4 md:px-8">
        <SectionBadge>Cultura Organizacional</SectionBadge>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 text-center">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mx-auto mb-2">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-foreground mb-1 text-primary">Missão</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Proteger a renda atual e futura das famílias, oferecendo soluções financeiras inteligentes e personalizadas 
              que garantam segurança, tranquilidade e estabilidade em todos os momentos da vida.
            </p>
          </div>

          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 text-center">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mx-auto mb-2">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-foreground mb-1 text-primary">Visão</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ser reconhecida no mercado como a corretora referência em atendimento de alta fidelidade e 
              proteção patrimonial customizada nos ramos de Vida, Saúde e Responsabilidade Civil.
            </p>
          </div>

          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 text-center">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mx-auto mb-2">
              <Star className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-foreground mb-1 text-primary">Valores</h3>
            <ul className="text-sm text-muted-foreground leading-relaxed space-y-1">
              <li>Transparência</li>
              <li>Integridade</li>
              <li>Compromisso com o cliente</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. CTA FINAL */}
      <section className="py-8 md:py-12 container mx-auto px-4 md:px-8">
        <div className="bg-primary rounded-3xl p-8 md:p-10 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Pronto para dar o próximo passo?
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Agende uma consultoria personalizada e descubra como podemos proteger o que você construiu.
          </p>
          <Link href="/cotacao">
            <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-5 h-auto text-base font-semibold shadow-lg hover:shadow-xl transition-all cursor-pointer">
              Agendar Consultoria Personalizada
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
