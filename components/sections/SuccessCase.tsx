import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Globe, Heart, Target } from "lucide-react";

const diferenciais = [
  {
    icon: Shield,
    title: "Consultoria Estratégica com Propósito",
    description:
      "Nossa abordagem vai além da venda de apólices. Entregamos direção e clareza para que você tome decisões financeiras seguras, protegendo seu patrimônio e sua família.",
  },
  {
    icon: Globe,
    title: "Parceria Global com a MetLife",
    description:
      "Trabalhamos com uma das maiores e mais sólidas seguradoras do mundo, garantindo contratos transparentes, taxas competitivas e indenizações rápidas.",
  },
  {
    icon: Heart,
    title: "Ética e Transparência Radical",
    description:
      "Sem letras miúdas ou falsas promessas. Cada solução é desenhada milimetricamente para cobrir as lacunas financeiras reais da sua vida ou do seu negócio.",
  },
  {
    icon: Target,
    title: "Proteção em Vida, Não Apenas em Morte",
    description:
      "Nossos seguros modernos são utilizáveis em vida, com coberturas para doenças graves, invalidez e planejamento sucessório.",
  },
];

export function SuccessCase() {
  return (
    <div>
      {/* Seção Principal */}
      <section className="py-16 md:py-20 bg-primary text-white pb-0">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Por que escolher a Rhema?
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Nossos diferenciais vão além do mercado tradicional. Veja por que somos a escolha certa para sua proteção.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {diferenciais.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-white/70 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link href="/cotacao">
                <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6 h-auto text-base font-semibold shadow-lg hover:shadow-xl transition-all cursor-pointer">
                  Quero proteger o que construí
                </Button>
              </Link>
              <Link href="/faq">
                <Button variant="outline" className="border-white bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6 h-auto text-base font-semibold transition-all cursor-pointer">
                  Dúvidas Frequentes (FAQ)
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
